#!/usr/bin/env sh
set -eu
fixture_dir="${TMPDIR:-/tmp}/testable-tls-fixture"
mkdir -p "$fixture_dir"
openssl req -x509 -newkey rsa:2048 -nodes -days 1 \
  -subj "/CN=localhost" \
  -keyout "$fixture_dir/key.pem" -out "$fixture_dir/cert.pem"
exec openssl s_server -quiet -accept 3443 \
  -key "$fixture_dir/key.pem" -cert "$fixture_dir/cert.pem" -www
