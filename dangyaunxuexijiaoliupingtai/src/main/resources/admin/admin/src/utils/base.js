const base = {
    get() {
        return {
            url : "http://localhost:8080/dangyaunxuexijiaoliupingtai/",
            name: "dangyaunxuexijiaoliupingtai",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/dangyaunxuexijiaoliupingtai/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "党员学习交流平台"
        } 
    }
}
export default base
