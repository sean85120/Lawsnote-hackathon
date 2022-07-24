<template>
    <div class="map">
      <div class="tim-content qqpc">
        <!-- <div class="title" v-bind:style="{'position':titlePositon,'background-color': titleColor,'border-bottom':titleBorder }">
          <ul>
            <li class="logoLink">11</li>
            <li class="item">首頁</li>
            <li class="item">下載</li>
            <li class="item">動態</li>
          </ul>  
        </div> -->
        <!-- <div class="circle"></div> -->
      </div>
    <div class="activebg firstbg" id="pic1" v-bind:style="{'background-position-x':positionX,'background-position-y': positionY1+'px' }"></div>
    <div class="content-item">

        <p style="line-height:300%">進入新創公司的世界前，請先設定成立公司的四大事項! <br><strong style="font-size:60px"> &#8681; </strong></p>
        

        <router-link to='/map/公司型態'><button type='button' class="button button-primary" ><i>公司型態</i></button></router-link>
        <router-link to='/map/負責人'><button type='button' class="button button-primary" ><i>負責人</i></button></router-link>
        <router-link to='/map/商業模式'><button type='button' class="button button-primary" ><i>商業模式</i></button></router-link>
        <router-link to='/map/公司名稱'><button type='button' class="button button-primary" ><i>公司名稱</i></button></router-link>

    </div>
    <div class="activebg secondbg" id="pic2" v-bind:style="{'background-position-x':positionX,'background-position-y': positionY2+'px' }"></div>
    <div class="content-item">
        
        <p style="line-height:300%">
            扎根期
            <br>公司設立流程7步驟!

            

        </p>
        
        
    </div>

    <div class="activebg thirdbg" id="pic3" v-bind:style="{'background-position-x':positionX,'background-position-y': positionY3+'px' }"></div>
    <div class="content-item">
        
        <p>成長期</p>
        
    </div>

    <div class="foot">foot</div>
    </div>

</template>


<script>
export default {
    name: "home",
    data() {
        return {
            ratio: 0.05,
            positionX: "50%",
            positionY1: 30,
            positionY2: 100,
            positionY3: 150,
            Y1: 0,
            Y2: 0,
            Y3: 0,
            titlePositon: "static",
            titleColor: "transparent",
            titleBorder:"0"
        };
    },
    components: {
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
        window.onload = () => {
            let pic1 = document.getElementById("pic1");
            let pic2 = document.getElementById("pic2");
            let pic3 = document.getElementById("pic3");
            this.positionY1 = this.Y1 = pic1.offsetTop * this.ratio;
            this.positionY2 = this.Y2 = pic2.offsetTop * this.ratio;
            this.positionY3 = this.Y3 = pic3.offsetTop * this.ratio;
        };
    },
    methods: {
        handleScroll() {
            let scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;
            console.log(scrollTop);
            this.positionY1 = this.Y1 - scrollTop * this.ratio;
            this.positionY2 = this.Y2 - scrollTop * this.ratio;
            this.positionY3 = this.Y3 - scrollTop * this.ratio;
            if (scrollTop > 600) {
                this.titlePositon = "fixed";
                this.titleColor = "#fff";
                this.titleBorder = "1px solid #e5e5e5";
            } else {
                this.titlePositon = "static";
                this.titleColor = "transparent";
                this.titleBorder = "0";
            }
        }
    }
};

</script>

<style scoped>
.home {
    height: 100%;
}
.title {
    width: 100%;
    height: 75px;
    position: static;
    background-color: transparent;
    z-index: 10;
    top: 0px;
    left: 0px;
    font-size: 0;
}
.title ul,li{
    float: left;
    list-style: none;
}
.title .item {
    height: 75px;
    line-height: 75px;
    width: 75px;
    text-align: center;
    font-size: 20px;
}
.title .logoLink {
    width: 106px;
    height: 75px;
    overflow: hidden;
    font-size: 0;
    background: transparent
        url(//sqimg.qq.com/qq_product_operations/im/qqlogo/imlogo_b.png)
        no-repeat left 15px;
    margin-left: 300px;
}
.title .item:hover{
    background-color: #12b7f5;
}
.circle {
    position: absolute;
    width: 100%;
    height: 52px;
    margin-top: -52px;
    background: transparent url(https://sqimg.qq.com/qq_product_operations/im/2018/linearbot.png) repeat-x left top;
    text-align: center;
    z-index: 5;
    bottom: 0;
}
.content-item {
    background-color: #fff;
    width: 100%;
    line-height: 250px;
    text-align: center;
    font-size: 30px;
    font-weight: bold;
}
.tim-content {
    position: relative;
    width: 100%;
    max-width: 1900px;
    min-width: 960px;
    margin: 0 auto;
    height: 100%;
}
.qqpc {
    background: url(https://sqimg.qq.com/qq_product_operations/im/imbanner/20180201/pcqq_bg.jpg)
        no-repeat center center;
    background-size: cover;
}
.activebg {
    position: relative;
    width: 100%;
    height: 600px;
    background: #fff;
    background-attachment: fixed;
    background-position: center 0;
    background-repeat: no-repeat;
}
.firstbg {
    background-image: url(https://www.businessappraisalflorida.com/wp-content/uploads/2019/10/Guide-on-How-to-Value-a-Pre-Revenue-Tech-Startup.jpg);
}
.secondbg {
    background-image: url(https://www.incimages.com/uploaded_files/image/1920x1080/getty_180152187_970679970450047_87329.jpg);
}
.thirdbg {
    background-image: url(https://www.nordea.com/sites/default/files/styles/hero_big/public/2021-10/happy-businesswomen-holding-hands-in-meeting-at-creative-office.jpg?itok=WCDBZ722);
}
.foot {
    background-color: black;
    line-height: 300px;
    color: #fff;
    text-align: center;
    width: 100%;
    font-size: 30px;
    font-weight: bold;
}

@import url(https://fonts.googleapis.com/earlyaccess/cwtexyen.css);
.button-primary {
    background-image: url(https://grandsolver.ge/wp-content/webpc-passthru.php?src=https://grandsolver.ge/wp-content/uploads/2022/01/spac.jpeg.jpg&nocache=1);
    background-repeat: no-repeat;
    background-size: 300px 300px;
    color:rgb(253, 253, 253);
    font-size: 60px;
    font-family: 'cwTeXYen', serif;
    width: 300px;
    height: 200px;
    margin-right:20px;
    border:0;
    border-radius:50px;
    cursor:pointer;
}

.button-primary:hover {
    color:#003C9D;
    background-color:#fff;
    border:4px #003C9D solid;
    transform: scale(1.1);
}

</style>