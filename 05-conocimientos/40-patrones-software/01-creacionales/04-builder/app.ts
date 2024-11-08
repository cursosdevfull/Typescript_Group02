import { UploadBuilder, UploadOptions } from "./builder";

const uploadOptions: UploadOptions = new UploadBuilder()
  .addFiles([
    new File(["xxxxx"], "file1.png", { type: "image/png" }),
    new File(["xxxxx"], "file2.jpeg", { type: "image/jpeg" }),
  ])
  .addMimeTypesAllowed(["image/png", "image/jpeg"])
  .addMaxSize(1000000)
  .addIsPublic(true)
  .addHasCors(true)
  .addHasAuthToUpload(true)
  .addHasAuthToDownload(true)
  .addHasAuthToDelete(true)
  .addHasAuthToShare(true)
  .addHasAuthToUnshare(true)
  .addHasAuthToCreateFolder(true)
  .addHasAuthToDeleteFolder(true)
  .addHasAuthToShareFolder(true)
  .addHasAuthToEditFolder(true)
  .addDirectory("images")
  .build();

console.log(uploadOptions);
