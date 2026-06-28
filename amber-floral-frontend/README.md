# Amber花藝網站

這是一個可直接部署到 GitHub Pages 的靜態網站，包含：

- 首頁
- 品牌介紹
- 商品展示
- 聯絡方式

## GitHub Pages 部署方式

1. 到 GitHub 建立一個新的 repository，例如 `amber-floral`.
2. 將本資料夾中的檔案上傳到 repository 根目錄：
   - `index.html`
   - `styles.css`
   - `script.js`
   - `.nojekyll`
   - `assets/`
3. 進入 repository 的 `Settings`。
4. 左側選擇 `Pages`。
5. 在 `Build and deployment` 中選擇：
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
6. 儲存後等待 GitHub Pages 建置完成。

部署完成後，網址通常會是：

```text
https://你的帳號.github.io/amber-floral/
```

## 修改內容

- 網站文字主要在 `index.html`
- 顏色與版面在 `styles.css`
- 手機選單與表單提示在 `script.js`
- 首頁圖片在 `assets/hero-amber-floral.png`
