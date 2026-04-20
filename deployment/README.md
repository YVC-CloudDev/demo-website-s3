# Deployment Runbook (S3 + CloudFront)

This runbook deploys the static website in this folder to AWS S3 and serves it with CloudFront.

## 1. Prerequisites

- AWS account with billing alerts configured
- AWS CLI configured locally (`aws configure`)
- A unique S3 bucket name (example: `student-cloud-launchpad-site`)

## 2. Create S3 bucket

Choose your region and create the bucket.

```bash
aws s3 mb s3://YOUR_BUCKET_NAME --region YOUR_REGION
```

## 3. Upload website files

From repository root:

```bash
aws s3 sync . s3://YOUR_BUCKET_NAME \
  --exclude ".git/*" \
  --exclude "deployment/*"
```

## 4. Enable static website hosting

```bash
aws s3 website s3://YOUR_BUCKET_NAME \
  --index-document index.html \
  --error-document faq.html
```

## 5. Configure public read access

You can use an S3 bucket policy for public read on objects.

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::YOUR_BUCKET_NAME/*"
    }
  ]
}
```

Apply with:

```bash
aws s3api put-bucket-policy \
  --bucket YOUR_BUCKET_NAME \
  --policy file://bucket-policy.json
```

## 6. Create CloudFront distribution

In AWS Console:

1. Create distribution
2. Origin domain: your S3 website endpoint
3. Viewer protocol policy: Redirect HTTP to HTTPS
4. Default root object: `index.html`
5. Create distribution and wait until Deployed

## 7. Invalidate cache after updates

```bash
aws cloudfront create-invalidation \
  --distribution-id YOUR_DISTRIBUTION_ID \
  --paths "/*"
```

## 8. Verify

- Open CloudFront domain in browser
- Confirm all pages load
- Confirm links and styles work

## 9. Rollback strategy

- Keep previous build snapshot in a local folder
- Re-sync previous snapshot to S3
- Run CloudFront invalidation again

## Cost safety

- Keep monthly budget alerts enabled
- Delete unused test distributions and buckets
- Avoid creating extra AWS services for this static site MVP
