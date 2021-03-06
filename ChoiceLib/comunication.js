// 通信
var comunication=[
"B|在正常情况下，无线电管理面板1用于：|A：HF1和HF2|B：VHF1|C：HF1（1号高频）",
"C|如果在无线电管理面板1上选择VHF2,选择灯在何处燃亮？|A：只在无线电管理面板1|B：只在无线电管理面板2|C：无线电管理面板1和无线电管理面板2",
"A|为了在发动机开车前起动话音记录仪，必须按下：|A：地面控制按钮|B：客舱话音记录仪擦除按钮|C：客舱话音记录仪测试",
"B|按下音响控制面板（ACP）上的MECH键：|A：可通过耳机与地面机械通话|B：可通过音响控制面板内话按钮与地面机务人员通话|C：可通过音响控制面板按钮与地面机务人员通话",
"C|为了擦除客舱话音记录仪的录音：|A：按一次擦除按钮|B：在空中，按下擦除按钮2秒钟|C：在地面，按下擦除按钮2秒钟以上并且停留刹车处于ON位",
"D|内话系统能与谁通话：|A：客舱乘务员|B：驾驶舱内所有人员|C：地面机械|D：以上三项都对",
"A|在无线电管理面板2上能否找到绿色AM（调幅）指示灯：|A：能|B：不能",
"A|如何用VOR找到自动情报服务信息？|A：在音响控制面板上选择话音按钮及VOR接收按钮|B：只选择话音按钮",
"A|如何取消绿色话音指示灯？|A：再次按下话音按钮|B：按下VOR接收按钮|C：以上两个都可",
"C|音响控制面板上复位按钮的功能是什么？|A：再次起动系统操作|B：取消以前的选择|C：取消任何燃亮的呼叫",
"B|当使用氧气面罩或耳机时，如果INT/RAD键被设在INT位，按下侧杆上的通话按钮进行无线电发射时，能否听到内话背景噪音：|A：能|B：不能",
"B|在无线电管理面板选择STBY/NAV后，能否确认MCDU－RAD/NAV页面的选择？|A：能|B：不能",
"B|在无线电管理面板3上能否进行STBY/NAV调谐：|A：能|B：不能",
"A|能否听到通过STBY/NAV选择的信标识别信号：|A：能，按下对应的接收按钮|B：能，按下MCDU上的一行",
"B|停留刹车松开时，能否通过驾驶舱扬声器听到话音记录仪测试信号？|A：能|B：不能",
"A|如果无线电管理面板2故障：|A：所有通讯系统可由另一个无线电管理面板控制|B：只有VHF2频率不能被控制|C：整个系统不工作|D：VHF2和HF2频率不能被控制",
"A|在VHF2上收到一个选择呼叫，音响控制板出现什么情况：|A：VHF2键上琥珀色呼叫信号闪亮|B：三个绿色条形指示灯亮|C：VHF2按钮上白色选择呼叫出现，VHF2接收选择器白色亮",
"A|能否在VHF和PA上同时发话：|A：绝不能|B：能，按下无线电调节开关和PA键|C：能，用驾驶杆按下通话按钮和PA键",
"C|当在音频转换板上选择机长3时：|A：机长使用第三个乘员的耳机|B：第三个乘员使用机长的耳机|C：机长使用自己的音频设备以及第三个乘员的音频控制面板",
"B|能用无线电管理面板1选择VOR2频率吗？|A：能|B：不能",
"A|如果无线电管理面板1故障，机组只能以何种方式使用无线电管理面板2：|A：关闭无线电管理面板1，然后使用无线电管理面板2|B：用顶板音响开关：CAP3",
"B|如果两个FMGC都故障，可用下列哪种方式选择无线电导航频率？|A：只能用无线电管理面板1|B：只能用无线电管理面板1和2|C：无线电管理面板1，2和3",
"B|与位于发动机短舱处的地面机务人员通话，机组必须用下列音响系统进行选择：|A：机械（MECH）＋内话（INT）|B：乘务员（ATT）＋客舱（CAB）|C：以上任何一项",
"C|只要地面飞机供电网络有电，驾驶舱话音记录器即通电，但时间只有5分钟，只有满足下列哪项条件，它才再次起动：|A：地面控制接通|B：一台发动机工作|C：以上A和B",
"A|如果一个无线电管理面板故障，所选择的接收机就不能再受无线电管理面板和频率的控制且此无线电管理面板上的条形指示灯熄灭：|A：对|B：错",
"C|无线电管理面板的用途是什么：|A：选择无线电频率|B：当MCDU故障时选择导航设备|C：以上两者",
"A|在空中时能否使用服务内话系统：|A：能|B：不能",
"A|如果ATC方式选择器置于自动（AUTO）位：|A：所选的ATC只在空中工作|B：当选择FLEX或TOGA为起飞功率时，所选的ATC工作|C：只要有一台发动机工作，所选的ATC即工作",
"A|在ATC控制面板上，故障灯何时燃亮：|A：所选的应答机故障时|B：系统1或2故障",
"A|在无线电管理面板上，ON/OFF开关控制：|A：对无线电管理面板的供电|B：只控制无线电管理面板的备用导航功能|C：只控制无线电管理面板的通讯功能",
"C|如果已用NAV键选择了备用导航功能：|A：此无线电管理面板上的VHF功能失效|B：VHF仍可用，但只能用最后选的频率|C：NAV键对无线电通讯频率选择无影响",
"C|若RMP2失效：|A：整个系统不工作|B：VHF2和HF2的频率不能控制|C：所有的频率都能控制",
"B|RMP1通常是供给：|A：HF1和HF2|B：VHF1（1号甚高频）|C：VHF2（2号甚高频）",
"C|在（）的旅客广播接收旋钮总是选择打开的，目的是为了记录客舱中乘务员对旅客所做的广播。|A：ACP1|B：ACP2|C：ACP3",
"B|服务内话系统能够使驾驶舱和七个配有（）的地方进行通话。|A：飞行乘务员终端B服务内话插孔",
"A|每一部收发机都可由两个无线电管理面板（RMP）中的任何一个进行调谐。|A：正确|B：错误",
"A|当按下RMP上的NAV选择电门时，无线电通讯频率里的信号是否受到影响|A：不受影响|B：通讯信号会变弱|C：无法正常受到频率里的呼叫"
];