import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      props: { msg },
      global: {
        mocks: {
          $t: jest.fn((t) => t),
        },
      },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
