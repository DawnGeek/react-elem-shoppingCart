const initalsState = {
    List: [{
        text: '热销',
        product: [{
            text: '超级鸡腿堡',
            sold: 8,
            praise: 46,
            price: 15,
            count: 0,
            img: 'https://fuss10.elemecdn.com/3/8f/54a597dd61e164d5a9e124bfa3bdfjpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/',
            pitch: false
        }, {
            text: '新脆皮炸鸡',
            sold: 8,
            praise: 46,
            price: 25,
            count: 0,
            img:"https://fuss10.elemecdn.com/1/a4/b3beaa666989fcec02fcbf70d02c6jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/",
            pitch: false
        }, {
            text: '南洋鸡肉脆皮卷',
            sold: 8,
            praise: 46,
            price: 25,
            count: 0,
            img:"https://fuss10.elemecdn.com/6/67/4d8290f533b6c87428df5660a670ejpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/",
            pitch: false
        }, {
            text: '脆皮手枪腿',
            sold: 8,
            praise: 46,
            price: 25,
            count: 0,
            img:"https://fuss10.elemecdn.com/a/f6/a5c8a6108887cd66946947a9e593bjpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/",
            pitch: false
        }]
    }, {
        text: '折扣菜',
        product: [{
            text: '吾皇双享餐',
            sold: 8,
            praise: 46,
            price: 15,
            count: 0,
            img:"https://fuss10.elemecdn.com/5/5c/0aa7b7274095c436724df9fb0334ejpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/",
            pitch: false
        }, {
            text: '吾皇至尊餐',
            sold: 8,
            praise: 46,
            price: 25,
            count: 0,
            img:"https://fuss10.elemecdn.com/6/75/ca50a2da1a26bdb9db23688ed3bddjpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/",
            pitch: false
        }, {
            text: '双鸡堡',
            sold: 8,
            praise: 46,
            price: 25,
            count: 0,
            img:"https://fuss10.elemecdn.com/8/7c/28686d80e3eebe99306746ff43fb9jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/",
            pitch: false
        }, {
            text: '塔塔酱鲜虾米汉堡',
            sold: 8,
            praise: 46,
            price: 25,
            count: 0,
            img:"https://fuss10.elemecdn.com/4/d7/cdcf97eb903cb344fdbb37d7fb4b8jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/",
            pitch: false
        }]
    }, {
        text: '精选套餐',
        product: [{
            text: '塔塔酱鲜虾米汉堡餐',
            sold: 8,
            praise: 46,
            price: 15,
            count: 0,
            img:"https://fuss10.elemecdn.com/5/cd/c67728b47a022834c67adda5f0eefjpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/",
            pitch: false
        }, {
            text: '辣味超级鸡腿堡餐',
            sold: 8,
            praise: 46,
            price: 25,
            count: 0,
            img:"https://fuss10.elemecdn.com/d/22/87fd52feda688ba74d4fe8571cb6ejpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/",
            pitch: false
        }, {
            text: '菠萝鸡腿堡餐',
            sold: 8,
            praise: 46,
            price: 25,
            count: 0,
            img:"https://fuss10.elemecdn.com/6/dc/b2008fe48f83b0f20fb3737f0f13ejpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/",
            pitch: false
        }, {
            text: '脆皮炸鸡餐',
            sold: 8,
            praise: 46,
            price: 25,
            count: 0,
            img:"https://fuss10.elemecdn.com/1/f1/1b792b66cc50c6a57a9ee259ace66jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/",
            pitch: false
        }]
    }],
    shopCar: []
};

const MainData = (state = initalsState, action) => {
    if(action.type === 'WS') {
        if(action.flag === '-') {
            --state.List[action.idx].product[action.ind].count;
        } else {
            ++state.List[action.idx].product[action.ind].count;
            state.List[action.idx].product[action.ind].pitch = true;
        }

        if(!state.List[action.idx].product[action.ind].count) {
            state.List[action.idx].product[action.ind].pitch = false;
        }
        return JSON.parse(JSON.stringify(state));
    } else if (action.type === 'EMPTY'){
        state.List.forEach((item, idx) => {
            item.product.forEach((area, ind) => {
                area.pitch = false;
                area.count = 0;
            })
        })
        return JSON.parse(JSON.stringify(state));
    }
    return state
};


export default MainData;
