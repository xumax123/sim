// 客舱/氧气
var cabinOxygen=[
"A|请勿吸烟，系好安全带，回到座位及出口灯何时亮？|A：适当接通开关及/或探测到过高的座舱高度|B：适当关闭开关及/或探测到过高的座舱高度|C：上面两项都对",
"D|当紧急出口灯选择在预位时，客舱应急灯和出口灯何时自动燃亮？|A：直流汇流条失效|B：交流汇流条2失效|C：交流主汇流条失效|D：交流汇流条1或直流卸载主汇流条失效",
"C|驾驶舱舱门：|A：只能向驾驶舱开|B：只能向客舱开|C：正常向驾驶舱开，紧急情况下可用力向驾驶舱或客舱开",
"C|当乘务长撤离面板上的命令按钮按下时，是否起动警告？|A：是的，任何时候|B：是的，只在地面|C：是的，如果驾驶舱撤离开关放机长和乘务长位|D：是的，它超控其它所有信号",
"D|如滑梯不能自动充气：|A：它就不能充气|B：可以人工充气|C：可以作为手持救生滑梯|D：以上B＋C",
"A|氧气瓶最小压力应保证：|A：紧急下降时在正常位保证所有机组人员使用10分钟|B：紧急下降时在正常位保证所有机组人员使用20分钟|C：紧急下降时在正常位保证所有机组人员使用30分钟",
"B|在登机口，舱门窗下红灯闪烁，表示：|A：滑梯预位且发动机工作|B：发动机停车，滑梯解除预位且客舱增压|C：发动机工作，滑梯解除预位",
"A|驾驶舱中有几根撤离绳？|A：两根|B：三根|C：四根",
"A|氧气选择开关在TEST/RESET（测试/复位）控制用于：|A：检查面罩供氧和闪亮操作|B：阻止氧气进入面罩|C：控制氧气进入面罩的流量",
"C|撤离信号命令按钮开关位于何处？|A：在驾驶舱中及靠近各旅客舱门处|B：只在驾驶舱顶板上|C：在顶板上和乘务长面板上",
"B|防烟罩使用后，如何使氧气流出？|A：只要将防烟罩从袋子里取出，就会自动供氧|B：必须拉下保护呼吸气袋的短绳|C：只要拉下头顶面罩就会流出",
"B|氧气选择开关在100％位时：|A：使用过滤的客舱空气|B：使用纯氧|C：使用高压纯氧",
"C|客舱注意信号转换时是什么声音？|A：高音|B：高/低音|C：低音",
"A|位于乘务站位的区域呼叫面板上琥珀色闪亮表示：|A：洗手间有烟雾|B：撤离|C：应急呼叫",
"A|旅客氧气一经起用，可以停止吗？|A：不可以|B：可以，通过重新装入拔出销|C：可以，通过放出驾驶舱内的氧气系统开电门",
"B|驾驶舱紧急撤离面板上选择开关在机长位时，能否在客舱启动紧急撤离？|A：只能在客舱启动|B：只能在驾驶舱启动|C：先在驾驶舱启动，然后在客舱",
"A|哪些灯是由应急供电组件供电的？|A：除了驾驶舱照明灯和洗手间辅助灯以外的所有应急灯|B：只有地板接近灯|C：只有逃生滑梯和翼上出口灯",
"A|舱门警告自动显示于：|A：当发动机运转，舱门未关时，在ECAM页面的发动机/警告显示上|B：当释压时，在发动机/警告显示上，并伴有灯光闪亮|C：通过按压ECAM控制面板上的舱门按钮，在ECAM页面上",
"A|驾驶舱舷窗可打开于：|A：机内|B：机外|C：机内和机外",
"C|系统提供哪种氧气？|A：驾驶舱和乘务组压缩氧，旅客化学氧|B：旅客压缩氧，机组化学氧|C：驾驶舱压缩氧，乘务组和旅客化学氧",
"C|氧气发生器，一经启动，可供氧：|A：5分钟，如果所有面罩都使用|B：30分钟，若只有一个面罩使用|C：13分钟，每个面罩都一样",
"B|当客舱高度＞10000英尺时，旅客氧气面罩门会自动打开。|A：正确|B：错误",
"A|如果机组氧气的按钮关断，ECAM的舱门/氧气页面会显示（）色的OXY。|A：琥珀|B：绿|C：蓝|D：白",
"A|乘务长面板上的LIGHTEMER按钮可以独立打开应急照明，不受顶板上的紧急出口灯选择电门位置的限制。|A：正确|B：不正确",
"B|顶板上的MASKMANON（面罩人工接通）按钮护盖将该按钮保持在（）位，当客舱高度超过（）ft时，旅客氧气面罩会掉下。（针对非高原构型）|A：自动；10000|B：自动；14000|C：人工；10000|D：人工；14000",
"A|驾驶舱固定氧气系统包括四个全面部快戴式面罩，存放在机组人员座椅旁的可快速取到的箱中。|A：正确|B：错误",
"B|驾驶舱内安装有两个可调圆顶灯作为照明，当电瓶供电时：|A：只给左圆顶灯供电|B：只给右圆顶灯供电|C：两个都供电|D：两个都不供电",
"A|在使用氧气面罩后压下RESET（复位）滑板是为了使氧气面罩话筒断电|A：对|B：不对",
"A|在地面废水的排放依靠重力，空中主要依靠压差，这句话正确么？|A：正确|B：错误"
];