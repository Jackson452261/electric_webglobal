document.addEventListener("DOMContentLoaded", function () {
    const blogPosts = [
        {
            id: 1,
            title: "家庭與商業電力安裝指南",
            description: "了解如何為您的住宅或商業空間安裝安全、可靠的電力系統。",
            date: "Feb 20",
            image: "./images/gallery-img1.jpg"
        },
        {
            id: 2,
            title: "如何降低企業的電力成本？",
            description: "節能方案不僅能降低成本，還能提升設備效率。",
            date: "Mar 05",
            image: "./images/gallery-img2.jpg"
        },
        {
            id: 3,
            title: "定期電力維護的重要性",
            description: "定期檢查電路和電氣設備不僅能防止突發故障，還能降低火災風險。",
            date: "Mar 18",
            image: "./images/gallery-img3.jpg"
        },
        {
            id: 4,
            title: "定期電力維護的重要性",
            description: "定期檢查電路和電氣設備不僅能防止突發故障，還能降低火災風險。",
            date: "Mar 18",
            image: "./images/gallery-img4.jpg"
        },
        {
            id: 5,
            title: "定期電力維護的重要性",
            description: "定期檢查電路和電氣設備不僅能防止突發故障，還能降低火災風險。",
            date: "Mar 18",
            image: "./images/gallery-img5.jpg"
        },
        {
        id: 6,
        title: "定期電力維護的重要性",
        description: "定期檢查電路和電氣設備不僅能防止突發故障，還能降低火災風險。",
        date: "Mar 18",
        image: "./images/gallery-img6.jpg"
    }
    ];

    // 取得 URL 參數中的 `id`
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get("id");

    // 根據 `id` 找到對應的文章
    const post = blogPosts.find(blog => blog.id == postId);

    if (post) {
        // 動態設定文章內容
        document.getElementById("blog-title").innerText = post.title;
        document.getElementById("blog-date").innerText = post.date;
        document.getElementById("blog-description").innerText = post.description;

        // 設定圖片的 src
        document.getElementById("blog-image").src = post.image;
        document.getElementById("blog-image").alt = post.title; // 設置 alt 屬性
    } else {
        // 如果找不到文章
        document.getElementById("blog-content").innerHTML = "<h2>Blog post not found</h2>";
    }
});
