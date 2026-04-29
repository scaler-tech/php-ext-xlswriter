# Skip constants

Use these constants to control how empty or hidden content is handled when reading a worksheet.

```php
const SKIP_NONE = 0x00;         // Do not skip cells or rows.
const SKIP_EMPTY_ROW = 0x01;    // Skip empty rows.
const SKIP_EMPTY_CELLS = 0x02;  // Skip empty cells.
const SKIP_HIDDEN_ROW = 0x08;   // Skip hidden rows.
const SKIP_EMPTY_VALUE = 0x100; // Skip cells with an empty value.
```
