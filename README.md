一個使用Node.js + Express製作的餐廳清單

功能：
1. 使用者可以新增一家餐廳
2. 使用者可以瀏覽一家餐廳的詳細資訊
3. 使用者可以瀏覽全部所有餐廳
4. 使用者可以修改一家餐廳的資訊
5. 使用者可以刪除一家餐廳
6. 使用者可以透過搜尋餐廳名稱(中英文)、類別來找到特定餐廳  
    (1) 搜尋欄位前後有空白的話，會先將其去除  
    (2) 如果沒有搜尋到東西，會顯示沒有找到

安裝流程：
1. 打開terminal, clone此專案
    ```
    git clone https://github.com/alvinkane/A1-restaurantList.git
    ```
2. 移到存取的資料夾(A1-restaurantList)
3. 安裝npm套件
    ```
    npm install
    ```
4. 安裝nodemon套件(若有可省略)
5. 在專案內創造一個env檔案，並在其中輸入MongoDV connection string
    ```
    MONGODB_ENV=mongodb+srv://<username>:<password>@<cluster>.pk4dwnp.mongodb.net/restaurant-list?retryWrites=true&w=majority
    ```
5. 匯入種子檔案
    ```
    npm run seed
    ```
6. 出現'mongodb connected!' 'done' 代表成功
5. 執行專案
    ```
    npm run dev
    ```
6. 出現 "This is listening on http://localhost:3000" 'mongodb connected'代表成功
7. 開啟任一瀏覽器輸入This is listening on http://localhost:3000

畫面  
![image](/image/view.png)
