from mitmproxy import http


def response(flow: http.HTTPFlow) -> None:
    text = flow.response.get_text(strict=False)
    if "student@example.invalid" in text:
        flow.response.headers["x-testable-pii-fixture"] = "detected"
