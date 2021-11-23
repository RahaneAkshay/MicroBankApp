import { shallowMount, mount, Wrapper } from "@vue/test-utils";
import CreateAccount from "@/components/CreateAccount.vue";
describe("CreateAccount.vue", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = mount(CreateAccount, {
      data: {
        title: "Create Account",
      },
    });
  });

  it("check for vue instance", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it("set the value to property", async () => {
    await wrapper.setData({ title: "bar" });
    expect((wrapper.vm as any).title).toBe("bar");
  });


  
});
