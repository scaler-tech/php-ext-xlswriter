# Merge cells

### **Function Prototype**

```php
mergeCells(string $scope, string $data[, resource $formatHandler]): self
```

#### **string $scope**

> Cell range

#### **string $data**

> Data

#### **resource $formatHandler**

> cell style

### Horizontal merge

```php
$excel->fileName("test.xlsx")
    ->mergeCells('A1:C1', 'Merge cells')
    ->output();
```

### Vertical merge

```php
$excel->fileName("test.xlsx")
    ->mergeCells('A1:A3', 'Merge cells')
    ->output();
```
