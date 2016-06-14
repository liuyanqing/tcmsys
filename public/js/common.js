$(document).ready(function(){
	$('input').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%' 
    });
	hideAlert();
	// Dropdown Menu
	var dropdown = document.querySelectorAll('.dropdown');
	var dropdownArray = Array.prototype.slice.call(dropdown,0);

	dropdownArray.forEach(function(el){
		var button = el.querySelector('a[data-toggle="dropdown"]'),
			menu = el.querySelector('.dropdown-side-menu'),
			arrow = button.querySelector('i.icon-arrow');

		button.onclick = function(event) {
			if(!menu.hasClass('show')) {
				menu.classList.add('show');
				menu.classList.remove('hide');
				arrow.classList.add('open');
				arrow.classList.remove('close');
				event.preventDefault();
			}
			else {
				menu.classList.remove('show');
				menu.classList.add('hide');
				arrow.classList.remove('open');
				arrow.classList.add('close');
				event.preventDefault();
			}
		};
	});
	Element.prototype.hasClass = function(className) {
		return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
	};
$(".btn-save").on("click",function () {
	var tizhi = [0,0,0,0,0,0,0,0,0];
	var Ascore = Number($("input[name='Ascore1']:checked").val()) + Number($("input[name='Ascore2']:checked").val()) + Number($("input[name='Ascore3']:checked").val()) + Number($("input[name='Ascore4']:checked").val()) + Number($("input[name='Ascore5']:checked").val()) + Number($("input[name='Ascore6']:checked").val()) + Number($("input[name='Ascore7']:checked").val()) + Number($("input[name='Ascore8']:checked").val());
	var Bscore = Number($("input[name='Bscore1']:checked").val()) + Number($("input[name='Bscore2']:checked").val()) + Number($("input[name='Bscore3']:checked").val()) + Number($("input[name='Bscore4']:checked").val()) + Number($("input[name='Bscore5']:checked").val()) + Number($("input[name='Bscore6']:checked").val()) + Number($("input[name='Bscore7']:checked").val()) + Number($("input[name='Bscore8']:checked").val());
	var Cscore = Number($("input[name='Cscore1']:checked").val()) + Number($("input[name='Cscore2']:checked").val()) + Number($("input[name='Cscore3']:checked").val()) + Number($("input[name='Cscore4']:checked").val()) + Number($("input[name='Cscore5']:checked").val()) + Number($("input[name='Cscore6']:checked").val()) + Number($("input[name='Cscore7']:checked").val());
	var Dscore = Number($("input[name='Dscore1']:checked").val()) + Number($("input[name='Dscore2']:checked").val()) + Number($("input[name='Dscore3']:checked").val()) + Number($("input[name='Dscore4']:checked").val()) + Number($("input[name='Dscore5']:checked").val()) + Number($("input[name='Dscore6']:checked").val()) + Number($("input[name='Dscore7']:checked").val()) + Number($("input[name='Dscore8']:checked").val());
	var Escore = Number($("input[name='Escore1']:checked").val()) + Number($("input[name='Escore2']:checked").val()) + Number($("input[name='Escore3']:checked").val()) + Number($("input[name='Escore4']:checked").val()) + Number($("input[name='Escore5']:checked").val()) + Number($("input[name='Escore6']:checked").val()) + Number($("input[name='Escore7']:checked").val()) + Number($("input[name='Escore8']:checked").val());
	var Fscore = Number($("input[name='Fscore1']:checked").val()) + Number($("input[name='Fscore2']:checked").val()) + Number($("input[name='Fscore3']:checked").val()) + Number($("input[name='Fscore4']:checked").val()) + Number($("input[name='Fscore5']:checked").val()) + Number($("input[name='Fscore6']:checked").val());
	var Gscore = Number($("input[name='Gscore1']:checked").val()) + Number($("input[name='Gscore2']:checked").val()) + Number($("input[name='Gscore3']:checked").val()) + Number($("input[name='Gscore4']:checked").val()) + Number($("input[name='Gscore5']:checked").val()) + Number($("input[name='Gscore6']:checked").val()) + Number($("input[name='Gscore7']:checked").val()) + Number($("input[name='Gscore8']:checked").val());
	var Hscore = Number($("input[name='Hscore1']:checked").val()) + Number($("input[name='Hscore2']:checked").val()) + Number($("input[name='Hscore3']:checked").val()) + Number($("input[name='Hscore4']:checked").val()) + Number($("input[name='Hscore5']:checked").val()) + Number($("input[name='Hscore6']:checked").val()) + Number($("input[name='Hscore7']:checked").val());
	var Iscore = Number($("input[name='Iscore1']:checked").val()) + Number($("input[name='Iscore2']:checked").val()) + Number($("input[name='Iscore3']:checked").val()) + Number($("input[name='Iscore4']:checked").val()) + Number($("input[name='Iscore5']:checked").val()) + Number($("input[name='Iscore6']:checked").val()) + Number($("input[name='Iscore7']:checked").val());
	Ascore = (Ascore-8)/32*100;
	Bscore = (Bscore-8)/32*100;
	Cscore = (Cscore-7)/28*100;
	Dscore = (Dscore-8)/32*100;
	Escore = (Escore-8)/32*100;
	Fscore = (Fscore-6)/24*100;
	Gscore = (Gscore-8)/32*100;
	Hscore = (Hscore-7)/28*100;
	Iscore = (Iscore-7)/28*100;
	var type = [Bscore,Cscore,Dscore,Escore,Fscore,Gscore,Hscore,Iscore];
	$("#Ascore").val(Ascore);
	$("#Bscore").val(Bscore);
	$("#Cscore").val(Cscore);
	$("#Dscore").val(Dscore);
	$("#Escore").val(Escore);
	$("#Fscore").val(Fscore);
	$("#Gscore").val(Gscore);
	$("#Hscore").val(Hscore);
	$("#Iscore").val(Iscore);
	for(var i=0;i<8;i++){
		if(type[i]>30){
			tizhi[i] = "1";
		}else {
			tizhi[i] = "0";
		}
	}
	if(Ascore>=60){
		tizhi[8] = "1";
	}
	$("#result").val(tizhi);
    });

});
//pulse wave
//function getPulseData(){
//	var dps = []; // dataPoints
//
//	var chart = new CanvasJS.Chart("chartContainer",{
//		title :{
//			text: "脉搏波信号"
//		},
//		data: [{
//			type: "line",
//			dataPoints: dps
//		}]
//	});
//
//	var xVal = 0;
//	var yVal = 100;
//	var updateInterval = 100;
//	var dataLength = 500; // number of dataPoints visible at any point
//
//	var updateChart = function (count) {
//		count = count || 1;
//		// count is number of times loop runs to generate random dataPoints.
//
//		for (var j = 0; j < count; j++) {
//			yVal = yVal +  Math.round(5 + Math.random() *(-5-5));
//			dps.push({
//				x: xVal,
//				y: yVal
//			});
//			xVal++;
//		}
//		if (dps.length > dataLength)
//		{
//			dps.shift();
//		}
//
//		chart.render();
//
//	};
//
//	// generates first set of dataPoints
//	updateChart(dataLength);
//	setInterval(function(){updateChart()}, updateInterval);
//}

var where = new Array(35);
function comefrom(loca,locacity)
{
	this.loca = loca; this.locacity = locacity;
}
where[0]= new comefrom("请选择省份","请选择城市");
where[1] = new comefrom("北京","|东城|西城|崇文|宣武|朝阳|丰台|石景山|海淀|门头沟|房山|通州|顺义|昌平|大兴|平谷|怀柔|密云|延庆");
where[2] = new comefrom("上海","|黄浦|卢湾|徐汇|长宁|静安|普陀|闸北|虹口|杨浦|闵行|宝山|嘉定|浦东|金山|松江|青浦|南汇|奉贤|崇明");
where[3] = new comefrom("天津","|和平|东丽|河东|西青|河西|津南|南开|北辰|河北|武清|红挢|塘沽|汉沽|大港|宁河|静海|宝坻|蓟县");
where[4] = new comefrom("重庆","|万州|涪陵|渝中|大渡口|江北|沙坪坝|九龙坡|南岸|北碚|万盛|双挢|渝北|巴南|黔江|长寿|綦江|潼南|铜梁|大足|荣昌|壁山|梁平|城口|丰都|垫江|武隆|忠县|开县|云阳|奉节|巫山|巫溪|石柱|秀山|酉阳|彭水|江津|合川|永川|南川");
where[5] = new comefrom("河北","|石家庄|邯郸|邢台|保定|张家口|承德|廊坊|唐山|秦皇岛|沧州|衡水");
where[6] = new comefrom("山西","|太原|大同|阳泉|长治|晋城|朔州|吕梁|忻州|晋中|临汾|运城");
where[7] = new comefrom("内蒙古","|呼和浩特|包头|乌海|赤峰|呼伦贝尔盟|阿拉善盟|哲里木盟|兴安盟|乌兰察布盟|锡林郭勒盟|巴彦淖尔盟|伊克昭盟");
where[8] = new comefrom("辽宁","|沈阳|大连|鞍山|抚顺|本溪|丹东|锦州|营口|阜新|辽阳|盘锦|铁岭|朝阳|葫芦岛");
where[9] = new comefrom("吉林","|长春|吉林|四平|辽源|通化|白山|松原|白城|延边");
where[10] = new comefrom("黑龙江","|哈尔滨|齐齐哈尔|牡丹江|佳木斯|大庆|绥化|鹤岗|鸡西|黑河|双鸭山|伊春|七台河|大兴安岭");
where[11] = new comefrom("江苏","|南京|镇江|苏州|南通|扬州|盐城|徐州|连云港|常州|无锡|宿迁|泰州|淮安");
where[12] = new comefrom("浙江","|杭州|宁波|温州|嘉兴|湖州|绍兴|金华|衢州|舟山|台州|丽水");
where[13] = new comefrom("安徽","|合肥|芜湖|蚌埠|马鞍山|淮北|铜陵|安庆|黄山|滁州|宿州|池州|淮南|巢湖|阜阳|六安|宣城|亳州");
where[14] = new comefrom("福建","|福州|厦门|莆田|三明|泉州|漳州|南平|龙岩|宁德");
where[15] = new comefrom("江西","|南昌市|景德镇|九江|鹰潭|萍乡|新馀|赣州|吉安|宜春|抚州|上饶");
where[16] = new comefrom("山东","|济南|青岛|淄博|枣庄|东营|烟台|潍坊|济宁|泰安|威海|日照|莱芜|临沂|德州|聊城|滨州|菏泽");
where[17] = new comefrom("河南","|郑州|开封|洛阳|平顶山|安阳|鹤壁|新乡|焦作|濮阳|许昌|漯河|三门峡|南阳|商丘|信阳|周口|驻马店|济源");
where[18] = new comefrom("湖北","|武汉|宜昌|荆州|襄樊|黄石|荆门|黄冈|十堰|恩施|潜江|天门|仙桃|随州|咸宁|孝感|鄂州");
where[19] = new comefrom("湖南","|长沙|常德|株洲|湘潭|衡阳|岳阳|邵阳|益阳|娄底|怀化|郴州|永州|湘西|张家界");
where[20] = new comefrom("广东","|广州|深圳|珠海|汕头|东莞|中山|佛山|韶关|江门|湛江|茂名|肇庆|惠州|梅州|汕尾|河源|阳江|清远|潮州|揭阳|云浮");
where[21] = new comefrom("广西","|南宁|柳州|桂林|梧州|北海|防城港|钦州|贵港|玉林|南宁地区|柳州地区|贺州|百色|河池");
where[22] = new comefrom("海南","|海口|三亚");
where[23] = new comefrom("四川","|成都|绵阳|德阳|自贡|攀枝花|广元|内江|乐山|南充|宜宾|广安|达川|雅安|眉山|甘孜|凉山|泸州");
where[24] = new comefrom("贵州","|贵阳|六盘水|遵义|安顺|铜仁|黔西南|毕节|黔东南|黔南");
where[25] = new comefrom("云南","|昆明|大理|曲靖|玉溪|昭通|楚雄|红河|文山|思茅|西双版纳|保山|德宏|丽江|怒江|迪庆|临沧");
where[26] = new comefrom("西藏","|拉萨|日喀则|山南|林芝|昌都|阿里|那曲");
where[27] = new comefrom("陕西","|西安|宝鸡|咸阳|铜川|渭南|延安|榆林|汉中|安康|商洛");
where[28] = new comefrom("甘肃","|兰州|嘉峪关|金昌|白银|天水|酒泉|张掖|武威|定西|陇南|平凉|庆阳|临夏|甘南");
where[29] = new comefrom("宁夏","|银川|石嘴山|吴忠|固原");
where[30] = new comefrom("青海","|西宁|海东|海南|海北|黄南|玉树|果洛|海西");
where[31] = new comefrom("新疆","|乌鲁木齐|石河子|克拉玛依|伊犁|巴音郭勒|昌吉|克孜勒苏柯尔克孜|博尔塔拉|吐鲁番|哈密|喀什|和田|阿克苏");
where[32] = new comefrom("香港","");
where[33] = new comefrom("澳门","");
where[34] = new comefrom("台湾","|台北|高雄|台中|台南|屏东|南投|云林|新竹|彰化|苗栗|嘉义|花莲|桃园|宜兰|基隆|台东|金门|马祖|澎湖");
where[35] = new comefrom("其它","|北美洲|南美洲|亚洲|非洲|欧洲|大洋洲");
function select()
{
	with(document.question1.province)
	{
		var loca2 = options[selectedIndex].value;
	}
	for(i = 0;i < where.length;i ++)
	{
		if (where[i].loca == loca2)
		{
			loca3 = (where[i].locacity).split("|");
			for(j = 0;j < loca3.length;j++)
			{
				with(document.question1.city)
				{
					length = loca3.length;
					options[j].text = loca3[j];
					options[j].value = loca3[j];
					var loca4=options[selectedIndex].value;
				}
			}
			break;
		}
	}
}
function init()
{
	with(document.question1.province)
	{
		length = where.length;
		for(k=0;k<where.length;k++)
		{
			options[k].text = where[k].loca; options[k].value = where[k].loca;
		}
		options[selectedIndex].text = where[0].loca; options[selectedIndex].value = where[0].loca;
	}

	with(document.question1.city)
	{
		loca3 = (where[0].locacity).split("|");
		length = loca3.length;
		for(l=0;l<length;l++)
		{
			options[l].text = loca3[l]; options[l].value = loca3[l];
		}
		options[selectedIndex].text = loca3[0]; options[selectedIndex].value = loca3[0];
	}
}
// alert hide
function hideAlert(){
	$(".alert-success").fadeOut(2000);
}