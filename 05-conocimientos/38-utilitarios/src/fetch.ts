type SystemUser = {
  id: number;
  name: string;
  username: string;
  email: string;
};

fetch<SystemUser[]>("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/pdf",
    Accept: "application/pdf",
    Authorization: "Bearer token",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

type HttpVerbs =
  | "GET"
  | "POST"
  | "PUT"
  | "DELETE"
  | "PATCH"
  | "OPTIONS"
  | "HEAD"
  | "TRACE"
  | "CONNECT"
  | "COPY"
  | "LOCK"
  | "MKCOL"
  | "MOVE"
  | "PURGE"
  | "PROPFIND"
  | "PROPPATCH"
  | "UNLOCK"
  | "UPDATE";

type HttpVerbsWithBody = Extract<
  HttpVerbs,
  "POST" | "PUT" | "PATCH" | "DELETE" | "UPDATE"
>;
type HttpVerbsWithoutBody = Exclude<HttpVerbs, HttpVerbsWithBody>;

type MethodBodyCombination =
  | { method: HttpVerbsWithBody; body: RequestInit["body"] }
  | { method: HttpVerbsWithoutBody; body: never };

type PreparedHeaders = {
  "Content-type": MimeTypes;
  Accept: MimeTypes;
  Authorization: `Bearer ${string}`;
};

type THeaders = RequestInit["headers"] & Partial<PreparedHeaders>;

type TRequestInit = RequestInit & MethodBodyCombination & { headers: THeaders };

declare function fetch<T = null>(
  input: RequestInfo | URL,
  init?: TRequestInit
): Promise<TResponse<T>>;

interface TResponse<T> extends Response {
  json(): Promise<T>;
}

type MimeTypes =
  | ".jpg"
  | ".midi"
  | "XML"
  | "application/epub+zip"
  | "application/gzip"
  | "application/java-archive"
  | "application/json"
  | "application/ld+json"
  | "application/msword"
  | "application/octet-stream"
  | "application/ogg"
  | "application/pdf"
  | "application/php"
  | "application/rtf"
  | "application/vnd.amazon.ebook"
  | "application/vnd.apple.installer+xml"
  | "application/vnd.mozilla.xul+xml"
  | "application/vnd.ms-excel"
  | "application/vnd.ms-fontobject"
  | "application/vnd.ms-powerpoint"
  | "application/vnd.oasis.opendocument.presentation"
  | "application/vnd.oasis.opendocument.spreadsheet"
  | "application/vnd.oasis.opendocument.text"
  | "application/vnd.openxmlformats-officedocument.presentationml.presentation"
  | "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  | "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  | "application/vnd.rar"
  | "application/vnd.visio"
  | "application/x-abiword"
  | "application/x-bzip"
  | "application/x-bzip2"
  | "application/x-csh"
  | "application/x-freearc"
  | "application/x-sh"
  | "application/x-shockwave-flash"
  | "application/x-tar"
  | "application/x-7z-compressed"
  | "application/xhtml+xml"
  | "application/zip"
  | "audio/aac"
  | "audio/mpeg"
  | "audio/ogg"
  | "audio/opus"
  | "audio/wav"
  | "audio/webm"
  | "font/otf"
  | "font/ttf"
  | "font/woff"
  | "font/woff2"
  | "image/bmp"
  | "image/gif"
  | "image/png"
  | "image/svg+xml"
  | "image/tiff"
  | "image/vnd.microsoft.icon"
  | "image/webp"
  | "text/calendar"
  | "text/css"
  | "text/csv"
  | "text/html"
  | "text/javascript"
  | "text/plain"
  | "video/3gpp"
  | "video/3gpp2"
  | "video/mp2t"
  | "video/mpeg"
  | "video/ogg"
  | "video/webm"
  | "video/x-msvideo";
