export type TUpload = {
  save(file: File): void;
};

export class UploadAWS implements TUpload {
  save(file: File): void {
    this.setCredentials();
    console.log(`Uploading file to AWS: ${file.name}`);
  }

  setCredentials(): void {
    console.log("Setting AWS credetials");
  }
}

export class UploadGoogle implements TUpload {
  save(file: File): void {
    console.log(`Uploading file to Google: ${file.name}`);
  }
}

export class UploadAzure implements TUpload {
  save(file: File): void {
    console.log(`Uploading file to Azure: ${file.name}`);
  }
}

export class UploadHardDisk implements TUpload {
  save(file: File): void {
    console.log(`Uploading file to HD: ${file.name}`);
  }
}

export type DESTINATION = "AWS" | "GOOGLE" | "AZURE" | "HD";

const classesDestinations: Record<DESTINATION, TUpload> = {
  AWS: new UploadAWS(),
  AZURE: new UploadAzure(),
  GOOGLE: new UploadGoogle(),
  HD: new UploadHardDisk(),
};

export enum DESTINATION_ENUM {
  AWS = "AWS",
  GOOGLE = "GOOGLE",
  AZURE = "AZURE",
  HD = "HD",
}

export function selectDestination(destination: DESTINATION): TUpload {
  return classesDestinations[destination];
}
