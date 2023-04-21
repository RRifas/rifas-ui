export const fetcher = (url?: string) =>
  url ? fetch(url).then((res) => res.json()) : Promise.reject();

export const update = (url: string | undefined, body: any) =>
  url
    ? fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }).then((res) => res.json())
    : Promise.reject();

export const create = (url: string | undefined, body: any) =>
  url
    ? fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }).then((res) => res.json())
    : Promise.reject();

export const remove = (url: string | undefined) =>
  url
    ? fetch(url, {
        method: "DELETE",
      }).then((res) => res.json())
    : Promise.reject();
