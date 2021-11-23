import { shallowMount, mount, Wrapper } from "@vue/test-utils";
import TheHeader from "@/components/TheHeader.vue";

describe("TheHeader.vue", () => {
  it("renders props title when passed", () => {
    const title = "new message";
    const wrapper = shallowMount(TheHeader, {
      propsData: { title },
    });
    expect(wrapper.text()).toMatch(title);
  });

  it("check for vue instance", () => {
    const wrapper = mount(TheHeader);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it.skip("has the expected html structure", () => {
    const wrapper = shallowMount(TheHeader);
    expect(wrapper.vm.$el).toMatchSnapshot();
  });

  it("checks href to google ", () => {
    const wrapper = shallowMount(TheHeader);
    const a = wrapper.find("a");
    expect(a.attributes().href).toBe("https://google.com");
  });

  it("has a link", () => {
    const wrapper = shallowMount(TheHeader);
    expect(wrapper.find("a").exists()).toBe(true);
  });

  it("does something", () => {
    const wrapper = shallowMount(TheHeader);
    expect(typeof (wrapper.vm as any).testProperty).toEqual("string");
  });
});

