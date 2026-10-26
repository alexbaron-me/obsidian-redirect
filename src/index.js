export default {
  fetch(request) {
    const filename = new URL(request.url).searchParams.get("file");
    if (!filename?.trim()) {
      return new Response("Missing file query parameter. Example: ?file=Inbox", {
        status: 400,
        headers: { "Content-Type": "text/plain; charset=utf-8" },
      });
    }

    return new Response(null, {
      status: 302,
      headers: {
        Location: `obsidian://new?file=${encodeURIComponent(filename)}&append`,
        "Cache-Control": "no-store",
      },
    });
  },
};
