// ===== MBO+AI目标计划管理系统 配置 =====
// 部署到新客户时，只需修改此文件
//
// 新客户三步走：
//   1. 修改本文件中 [公司品牌] 和 [Supabase] 配置
//   2. 注册独立 Supabase 项目，创建对应数据表
//   3. 部署 app.html 到任意静态托管（GitHub Pages / 腾讯云 COS / Nginx）
//
// =============================================

// ===== 公司品牌 =====
window.APP_CONFIG = {
  company: {
    fullName: '南京立顶医疗科技有限公司',
    shortName: '立顶医疗',
    brandName: 'Leading Med',
    iconText: 'LM',
    address: '南京市',
    copyright: '南京立顶医疗科技有限公司',
  },
  
  brand: {
    primary:   '#02314D',
    techBlue:  '#1B6EC4',
    accent:    '#0F7BE1',
  },
  
  aiContext: '南京立顶医疗科技有限公司（Leading）专注于医疗器械研发制造，设有采购中心、营销中心、研发中心、生产中心、财务中心、CDMO中心、质量中心及人力资源行政中心。核心业务涵盖医疗器械研发、生产、质量控制与国内外销售。',
  
  features: {
    kpi:       true,
    mbo:       true,
    employees: true,
    policies:  true,
    system:    true,
    decision:  false,
    talent:    false,
    payroll:   false,
    learning:  false,
    dashboard: false,
    ideas:     false,
    rdpm:      false,
  },
};

// ===== Supabase 数据库配置 =====
// 每个新客户需注册独立 Supabase 项目，替换以下地址和 Key
var SUPABASE_URL = 'https://xgysfujnhwgevmojzkbf.supabase.co';
var SUPABASE_ANON_KEY = 'sb_publishable_dPt0sB5D8ZQ6ZdHt6wuvyA_MkjOeknx';

// Supabase 数据表名（一般不需要改，除非客户有用到多项目共享表的需求）
var SUPABASE_TABLE = 'hwm_employees';
var SUPABASE_WP_TABLE = 'hwm_workplans';
var SUPABASE_USERS_TABLE = 'hwm_users';
var SUPABASE_JD_TABLE = 'hwm_jobdesc';
var SUPABASE_FAV_TABLE = 'hwm_favorites';
