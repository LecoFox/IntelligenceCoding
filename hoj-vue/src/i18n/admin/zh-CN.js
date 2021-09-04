export const m = {
  // /views/admin/Login.vue
  Welcome_to_Login_Admin: '欢迎登录后台管理系统',
  Login: '登录',
  Please_enter_username: '用户名',
  Please_enter_password: '密码',
  Admin_Login_Success:'尊敬的管理员，欢迎回来~',
  Please_check_your_username_or_password:'请检查你的用户名或密码',

  // /views/admin/Home.vue
  Dashboard: '仪表盘',
  General: '常用设置',
  User_Admin: '用户管理',
  Announcement_Admin: '公告管理',
  System_Config: '系统配置',
  Problem_Admin: '题目管理',
  Problem_List: '题目列表',
  Create_Problem: '增加题目',
  Export_Import_Problem: '导入|导出题目',
  Contest_Admin: '比赛管理',
  Contest_List: '比赛列表',
  Create_Contest: '创建比赛',
  Discussion:'讨论管理',
  Discussion_Admin:'讨论管理',
  Home_Page:'主页',
  Logout:'退出登录',

  // /views/admin/Dashboard.vue
  Last_Login: '最近登录',
  Super_Admin:'超级管理员',
  Admin:'普通管理员',
  All_Problem_Admin:'题目管理员',
  Total_Users:'总用户数',
  Today_Submissions:'今日总交题数',
  Recent_14_Days_Contests:'最近两周比赛',
  Backend_System:'后端系统',
  Server_Number:'服务器数量',
  Nacos_Status:'Nacos 状态',
  HTTPS_Status: 'HTTPS 状态',
  Backend_Service: '后端服务',
  Name:'名称',
  Host:'主机',
  Port:'端口',
  CPU_Core:'CPU核心数',
  CPU_Usage:'CPU使用率',
  Mem_Usage:'内存使用率',
  Secure:'不稳定',
  Healthy_Status:'状态',
  Healthy:'健康',
  Unhealthy:'不健康',
  Judge_Server:'判题服务器',

  // /views/admin/general/User.vue
  General_User: '用户管理',
  Created_Time:'创建时间',
  Delete:'删除',
  OnlyAdmin:'仅显示管理员',
  User_Type: '用户角色',
  Normal:'正常',
  Disable:'封禁',
  Edit_User:'编辑用户',
  Delete_User:'删除用户',
  Import_User: '导入用户',
  Import_User_Tips1:'用户数据导入仅支持csv格式的用户数据。',
  Import_User_Tips2:'共三列数据:用户名，密码，邮箱，任一列不能为空，否则该行数据可能导入失败。',
  Import_User_Tips3:'第一行不必写(“用户名”，“密码”，“邮箱”)这三个列名',
  Import_User_Tips4:'请导入保存为UTF-8编码的文件，否则中文可能会乱码。',
  Choose_File:'选择文件',
  Password: '密码',
  Upload_All:'上传全部',
  Clear_All:'清除全部',
  Generate_User: '生成用户',
  Prefix:'前缀',
  Suffix:'后缀',
  Start_Number:'开始数字',
  End_Number:'结束数字',
  Password_Length:'密码长度',
  Generate_and_Export:'生成 & 导出',
  The_usernames_will_be:'生成的用户名将会是',
  Set_New_PWD:'设置新密码',
  General_New_Password: '新密码',
  The_end_number_cannot_be_less_than_the_start_number:'结束数字不能小于开始数字',
  Please_select_6_to_25_characters_for_password_length:'请输入6~25作为密码的长度',
  Start_Number_Required:'开始数字不能为空',
  End_Number_Required:'结束数字不能为空',
  Password_Length_Checked:'密码长度必须是数字',
  Delete_User_Tips:'你确定要删除该用户？可能会关联删除该用户创建的公告，题目，比赛等。',
  The_number_of_users_selected_cannot_be_empty:'选择的用户不能为空',
  Error_Please_check_your_choice:'错误，请检查你的输入或选择是否准确',
  Generate_User_Success:'所有用户已经被成功创建, 用户的列表数据文件将下载到你的电脑里',
  Generate_Skipped_Reason:'行用户数据被过滤，原因是可能为空行或某个列值为空',
  Upload_Users_Successfully:'上传用户成功',

  // /views/admin/general/Announcement.vue
  General_Announcement: '公告管理',
  Create:'创建',
  Modified_Time:'修改时间',
  Edit_Announcement:'编辑公告',
  Create_Announcement:'创建公告',
  Delete_Announcement:'删除公告',
  Announcement_Title: '公告标题',
  Announcement_Content: '公告内容',
  Announcement_visible: '是否可见',
  Delete_Announcement_Tips:'你确实是否删除该公告？',
  
  // /views/admin/general/SystemConfig.vue
  Website_Config:'网站设置',
  Base_Url: '基础URL',
  Web_Name: '网站名称',
  Short_Name: '网站简称',
  Record_Name:'备案名',
  Record_Url:'备案地址',
  Project_Name:'项目名',
  Project_Url:'项目地址',
  Web_Desc: '网站简介',
  Allow_Register: '是否允许注册',
  Home_Rotation_Chart:'首页轮播图',
  SMTP_Config: 'SMTP 设置',
  Email_BG:'邮件背景',
  Email_BG_Desc:'请输入邮件背景图的URL链接',
  Send_Test_Email:'发送测试邮件',
  Email: '邮箱',
  DataSource_Config:'数据源设置',
  Please_input_your_email:'请输入你的邮箱',

  // /views/admin/problem/ProblemList.vue
  Contest_Problem_List: '比赛题目列表',
  Display_ID:'展示ID',
  Display_Title:'展示标题',
  Add_Rmote_OJ_Problem:'添加远程OJ题目',
  Add_From_Public_Problem:'从公共题库添加题目',
  Original_Display:'原题显示',
  Contest_Display:'比赛显示',
  Auth:'权限',
  Modified_User:'最近修改者',
  All_Problem:'全部题目',
  Public_Problem:'公开题目',
  Private_Problem:'隐藏题目',
  Contest_Problem:'比赛题目',
  Download_Testcase:'下载评测数据',
  Add_Contest_Problem:'添加比赛题目',
  Remote_OJ:'远程OJ',
  Add:'添加',
  Remove:'移除',
  Delete_Problem_Tips:'确定要删除此题目吗？注意：该问题的相关数据也将被彻底删除，包括题目详情、题目的提交记录等！',
  Remove_Problem_Tips:'你是否确定要将该题目移出比赛？',
  Add_Successfully:'添加成功',
  Download_Testcase_Success:'该题目的评测数据已经被成功下载！',
  Enter_The_Problem_Display_ID_in_the_Contest:'请输入该题目在比赛中展示ID',
  Problem_ID_is_required:'题目ID不能为空',
  The_Problem_Display_ID_in_the_Contest_is_required:'题目在比赛中的展示ID不能为空',

  // /views/admin/problem/Problem.vue
  Problem_Display_ID: '题目展示ID',
  Contest_Display_Title:'比赛中的展示标题',
  Contest_Display_ID: '比赛中的展示ID',
  Description: '描述',
  Input_Description: '输入描述',
  Output_Description: '输出描述',
  Time_Limit: '时间限制',
  Memory_Limit: '内存限制',
  Stack_Limit:'栈限制',
  Code_Shareable:'代码是否可分享',
  Languages: '语言列表',
  Problem_Examples:'题面样例',
  Problem_Examples_Desc:'题目样例：请最好不要超过2个题目样例，题面样例不纳入评测数据。',
  Problem_Example:'样例',
  Example_Input:'样例输入',
  Example_Output:'样例输出',
  Add_Example: '添加样例',
  Special_Judge: '特殊判题',
  Special_Judge_Code:'特殊判题代码',
  Special_Judge_Tips1:'为什么要使用特殊判题？',
  Special_Judge_Tips2:'题目要求的输出结果可能不唯一，允许不同结果存在。',
  Special_Judge_Tips3:'题目最终要求输出一个浮点数，而且会告诉只要答案和标准答案相差不超过某个较小的数就可以。例如题目要求保留几位小数，输出结果后几位小数不相同也是正确的。',
  Use_Special_Judge: '使用特殊判题',
  SPJ_language: 'SPJ语言',
  Compile: '编译',
  Code_Template: '代码模板',
  Type: '类型',
  Judge_Samples:'评测数据',
  Problem_Sample:'测试用例',
  Sample_Input:'用例输入',
  Sample_Output:'用例输出',
  Sample_Input_File:'输入文件名',
  Sample_Output_File:'输出文件名',
  Sample_Tips:'评测数据：判题机对该题目的相关提交进行评测的数据来源。',
  Add_Sample: '添加用例',
  Use_Upload_File:'使用上传文件',
  Use_Manual_Input:'使用手动输入',
  Hint: '提示',
  Source: '来源',
  Auto_Remove_the_Blank_at_the_End_of_Code:'自动去除代码末尾空白符',
  Publish_the_Judging_Result_of_Test_Data:'公开评测点数据结果',
  Edit_Problem: '编辑题目',
  Create_Problme: '创建题目',
  Change_Judge_Method:'如果你想改变该题目的判题方法，那么你需要重新上传测试数据。',
  Add_Tag_Error:'不要添加已有的标签！',

  Upload_Testcase_Successfully:'上传评测数据成功',
  Upload_Testcase_Failed:'上传评测数据失败',
  is_required:'不能为空！',
  Score_must_be_greater_than_or_equal_to_0:'分数必须大于0！',
  Score_must_be_an_integer:'分数必须是整数！',
  Spj_Code:'Spj代码',
  Spj_Code_not_Compile_Success:'Spj代码没有编译成功，请重新编译！',


  // /views/admin/problem/ImportAndExport.vue
  Export_Problem:'导出题目',
  Export:'导出',
  Import_Problem:'导入题目',
  Import_QDOJ_Problem:'导入QDOJ题目',
  Export_Problem_NULL_Tips:'选择导出的题目不能为空',

  // /views/admin/contest/ContestList.vue
  Visible:'是否可见',
  Info:'信息',
  View_Contest_Problem_List:'查看比赛题目列表',
  View_Contest_Announcement_List:'查看比赛公告列表',
  Download_Contest_AC_Submission:'下载比赛通过的提交代码',
  Exclude_admin_submissions:'排除管理员的提交',
  Delete_Contest_Tips:'此操作将删除该比赛以及比赛的提交、讨论、公告、记录等数据, 是否继续?',

  // /views/admin/contest/Contest.vue
  Contest_Title: '比赛标题',
  Contest_Description: '比赛描述',
  Contest_Start_Time: '开始时间',
  Contest_End_Time: '结束时间',
  Contest_Duration:'比赛时长',
  Contest_Rule_Type: '比赛赛制',
  Seal_Time_Rank:'开启封榜',
  Real_Time_Rank: '实时榜单',
  Seal_Rank_Time:'封榜时间',
  Contest_Auth: '比赛权限',
  Contest_Password:'比赛密码',
  Contest_Seal_Half_Hour:'比赛结束前半小时',
  Contest_Seal_An_Hour:'比赛结束前一小时',
  Contest_Seal_All_Hour:'比赛全程',
  Edit_Contest:'编辑比赛',
  Create_Contest:'创建比赛',
  Contest_Duration_Check:'比赛时长不能小于0',
  Contets_Time_Check:'开始时间应该早于结束时间',

   // /views/admin/discussion/Discussion.vue
  Discussion_ID:'讨论ID',
  Top:'置顶',
  Discussion_Report:'讨论举报',
  Reporter:'举报者',
  Report_Time:'举报时间',
  View_Report_content:'查看举报内容',
  View_Discussion:'查看讨论详情',
  Content:'内容',
  Report_Content:'举报内容',
  The_number_of_discussions_selected_cannot_be_empty:'勾选的讨论不能为空',
}
