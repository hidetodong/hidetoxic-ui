/*
 * @Author: hidetodong
 * @Date: 2022-08-14 16:21:41
 * @LastEditTime: 2022-08-14 18:52:11
 * @LastEditors: hidetodong
 * @Description: 
 * @FilePath: /hidetoxic-ui/src/index.ts
 * HIDETOXIC - 版权所有
 */

import { createApp } from 'vue'
import HidetoxicUI from "./entry"

import 'uno.css'

const app = createApp({
    template:`
        <div>
            <HideButton icon="edit">普通按钮121231231</HideButton>
        </div>
    `
})

app.use(HidetoxicUI)

app.mount("#app")