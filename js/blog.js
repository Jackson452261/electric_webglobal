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
        },
        {
            id: 7,
            title: "電力智慧管理：未來趨勢",
            description: "智慧電力管理系統正在改變能源使用方式。了解 IoT 物聯網如何幫助企業和家庭最佳化能源效率。",
            date: "May 10",
            image: "http://via.placeholder.com/600x400/666/999"
        },
        {
            id: 8,
            title: "電力系統安全檢查的重要性",
            description: "許多電氣火災是由老舊電線或不當使用電力設備引起的。學習如何進行基本的電力安全檢查，確保您的設備運作安全。",
            date: "Jun 02",
            image: "http://via.placeholder.com/600x400/777/888"
        },
        {
            id: 9,
            title: "發電機與備用電源：如何選擇？",
            description: "發電機和 UPS 備用電源是應對突發停電的關鍵設備。我們分析不同類型的備用電源，幫助您選擇最適合的方案。",
            date: "Jun 15",
            image: "http://via.placeholder.com/600x400/888/777"
        }
    ];
    
    

    const blogContainer = document.querySelector("#blog .row");
    blogContainer.innerHTML = ""; // 清空現有內容

    // 動態生成 Blog 項目
    blogPosts.forEach((post) => {
        let blogHTML = `
        <div class="col-lg-4 col-md-6">
            <div class="single-blog-sec">
                <div class="single-blog-sec-img">
                    <img src="${post.image}" alt="">
                </div>
                <div class="blog-details">
                    <div class="blog-meta">
                        <ul>
                            <li><i class="far fa-clock"></i> ${post.date}</li>
                            <li><i class="far fa-comments"></i><a href="#">2 Comments</a></li>
                        </ul>
                    </div>
                    <div class="blog-body">
                        <h3><a href="blog-detail.html?id=${post.id}">${post.title}</a></h3>
                        <p>${post.description}</p>
                    </div>
                </div>
            </div>
        </div>
        `;
        blogContainer.innerHTML += blogHTML;
    });
});
