# Exception codes

1. Memory allocation failed.
2. Failed to create the output XLSX file, usually because of a permission error.
3. Failed to create a temporary file while assembling the workbook.
4. ZIP error while creating the XLSX file: `ZIP_ERRNO`.
5. File error or unknown ZIP error while adding a subfile to the XLSX file.
6. Unknown ZIP error while closing the XLSX file.
7. A `NULL` function parameter was ignored.
8. Parameter validation error.
9. Worksheet name exceeds Excel's 31-character limit.
10. Worksheet name contains an invalid character: `[]:*?/\\`.
11. Worksheet name is already in use.
12. Value exceeds Excel's 32-character limit.
13. Value exceeds Excel's 128-character limit.
14. Value exceeds Excel's 255-character limit.
15. String exceeds Excel's 32,767-character limit.
16. Failed to find an internal string index.
17. Worksheet row or column index is outside Excel's supported range; check array keys.
18. Worksheet URL count exceeds Excel's maximum of 65,530 URLs.
19. Failed to read image dimensions or DPI.
