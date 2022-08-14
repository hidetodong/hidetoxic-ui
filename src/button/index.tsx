import { App } from "vue";
import HideButton from "./Button";

// 导出Button组件
export { HideButton };

// 导出Vue插件
export default {
  install(app: App) {
    app.component(HideButton.name, HideButton);
  },
};
