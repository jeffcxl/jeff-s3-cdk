import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as s3 from 'aws-cdk-lib/aws-s3';

export class JeffS3CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
 // Create an S3 bucket
   new s3.Bucket(this, 'MyCdkBucket', {
     // Enable versioning for the bucket
     versioned: true,
     // Define the removal policy for the bucket
     removalPolicy: cdk.RemovalPolicy.DESTROY,
     // Automatically delete objects when the bucket is deleted
     autoDeleteObjects: true,
   });

    // example resource
    //const queue = new sqs.Queue(this, 'JeffS3CdkQueue', {
    //visibilityTimeout: cdk.Duration.seconds(300)
    //});
  }
}
