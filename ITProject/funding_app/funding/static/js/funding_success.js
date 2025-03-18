document.addEventListener("DOMContentLoaded", function () {
    console.log("Funding success page loaded!");

    // 5秒后自动跳转到查看申请页面
    setTimeout(() => {
        window.location.href = "/funding/view_applications/";
    }, 5000);
});
