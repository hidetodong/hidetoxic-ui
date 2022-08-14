/*
 * @Author: hidetodong
 * @Date: 2022-08-14 22:03:04
 * @LastEditTime: 2022-08-14 22:03:04
 * @LastEditors: hidetodong
 * @Description: 
 * @FilePath: /hidetoxic-ui/docs/shims-vue.d.ts
 * HIDETOXIC - 版权所有
 */
/*
 * @Author: hidetodong
 * @Date: 2022-08-14 16:29:26
 * @LastEditTime: 2022-08-14 16:29:26
 * @LastEditors: hidetodong
 * @Description: 
 * @FilePath: /hidetoxic-ui/src/shims-vue.d.ts
 * HIDETOXIC - 版权所有
 */


declare module "*.vue" {
    import { DefineComponent } from 'vue'
    const component:DefineComponent<{},{},any>;
    export default component
}