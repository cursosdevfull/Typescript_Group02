import { DESTINATION_ENUM, selectDestination, TUpload } from "./upload";

const file: File = new File(["data"], "file.txt", { type: "text/plain" });
const upload: TUpload = selectDestination(DESTINATION_ENUM.AWS);
upload.save(file);
