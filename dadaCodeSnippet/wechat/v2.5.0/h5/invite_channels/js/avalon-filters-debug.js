/*
********************
**** 2016-05-24 ****
********************
*/

// 禁用 avalon 自带的加载器
avalon.config({
  loader: false
});

// DOM Ready 时显示手动隐藏的 avalon 模板
avalon.ready(function() {
  // FastClick.attach(document.body);

  $('.showHidden').removeClass('showHidden'); // old

  // 下面属性删除有点暴力，请确保只在避免暴露插值表达式时使用
  $('[ms-controller][hidden], [ms-controller] [hidden]').removeAttr('hidden'); // 隐藏不再占坑－h5属性
  $('[invisible]').removeAttr('invisible'); // 隐藏但还占坑－自创属性
});