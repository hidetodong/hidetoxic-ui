import { App } from "vue";
import { HideButton } from "./button";

import "uno.css";

// 导出单独组件
export { HideButton };

// 编写一个插件，实现一个install方法
export default {
  install(app: App): void {
    app.component(HideButton.name, HideButton);
  },
};
