/*
 * @Author: hidetodong
 * @Date: 2022-08-14 22:16:14
 * @LastEditTime: 2022-08-14 22:18:32
 * @LastEditors: hidetodong
 * @Description:
 * @FilePath: /hidetoxic-ui/src/button/_tests_/Button.spec.ts
 * HIDETOXIC - 版权所有
 */

import Button from "../Button";

import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

describe("color", () => {
  test("default", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
    });
    expect(
      wrapper
        .classes()
        .map((v) => v.replace("\n", ""))
        .includes("bg-blue-500")
    ).toBe(true);
  });
  test("red", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
      props: {
        color: "red",
      },
    });
    expect(wrapper.classes().includes("bg-red-500")).toBe(true);
  });
});
