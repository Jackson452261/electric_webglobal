document.addEventListener("DOMContentLoaded", function () {
    const blogPosts = [
        {
            id: 1,
            title: "家庭與商業電力安裝指南",
            description: "了解如何為您的住宅或商業空間安裝安全、可靠的電力系統。我們提供專業的電線布設、電箱安裝及電力優化服務。",
            date: "Feb 20",
            image: "http://via.placeholder.com/600x400/000/fff"
        },
        {
            id: 2,
            title: "如何降低企業的電力成本？",
            description: "節能方案不僅能降低成本，還能提升設備效率。本文將分享企業如何透過智能電表、節能設備和電力監控系統來減少電費支出。",
            date: "Mar 05",
            image: "http://via.placeholder.com/600x400/111/eee"
        },
        {
            id: 3,
            title: "定期電力維護的重要性",
            description: "定期檢查電路和電氣設備不僅能防止突發故障，還能降低火災風險。我們的專業維護服務確保您的電力系統穩定運行。",
            date: "Mar 18",
            image: "http://via.placeholder.com/600x400/222/ddd"
        },
        {
            id: 4,
            title: "太陽能發電如何改變您的能源使用？",
            description: "太陽能發電系統不僅環保，還能幫助家庭和企業降低電費。了解如何選擇適合的太陽能設備並獲得政府補助。",
            date: "Apr 02",
            image: "http://via.placeholder.com/600x400/333/ccc"
        },
        {
            id: 5,
            title: "電動車充電站的未來趨勢",
            description: "隨著電動車市場的擴展，充電站的需求也在增加。我們分析最新的充電技術、充電站安裝方案及市場趨勢。",
            date: "Apr 15",
            image: "http://via.placeholder.com/600x400/444/bbb"
        },
        {
            id: 6,
            title: "停電應對措施與電力備援方案",
            description: "停電可能造成不便甚至財產損失。本篇文章介紹家庭與企業如何準備電力備援系統，確保在緊急狀況下仍能保持運作。",
            date: "May 01",
            image: "http://via.placeholder.com/600x400/555/aaa"
        }
    ];
    

    // 取得 URL 參數
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get("id");

    // 查找對應的 Blog 文章
    const post = blogPosts.find(blog => blog.id == postId);

    if (post) {
        // 將 Blog 內容填入 HTML
        document.querySelector("#blog-title").innerText = post.title;
        document.querySelector("#blog-description").innerText = post.description;
        document.querySelector("#blog-date").innerText = post.date;
        document.querySelector("#blog-image").src = post.image;
    } else {
        // 若找不到文章，顯示錯誤訊息
        document.querySelector("#blog-content").innerHTML = "<h2>Blog post not found</h2>";
    }
});
