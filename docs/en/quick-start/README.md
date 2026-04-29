# Quick start

Two minimal walkthroughs that cover the most common use cases:

* [Create file](create.md) — build a new XLSX from scratch.
* [Read file](reader.md) — open an existing XLSX and iterate its rows.
* [Close manually](close.md) — explicitly release file handles and native resources in long-running scripts.

Both examples use the `Vtiful\Kernel\Excel` class. Read-side features require building the extension with `--enable-reader` (the default in PECL packages).
