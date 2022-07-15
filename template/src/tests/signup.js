import React from "react";
import enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import sinon from "sinon";
import { act } from "react-dom/test-utils";
import Signup from "../components/signup";

enzyme.configure({ adapter: new Adapter() });

describe("Signup page should work properly", () => {
  let component;
  beforeEach(() => {
    component = mount(<Signup />);
  });
  afterEach(() => {
    component.unmount();
  });

  it("should have all fields on signup page", () => {
    expect(component.find('[name="firstName"] input').length).to.equal(1);
    expect(component.find('[name="lastName"] input').length).to.equal(1);
    expect(component.find('[name="email"] input').length).to.equal(1);
    expect(component.find('[name="role"] select').length).to.equal(1);
    expect(component.find('[type="date"] input').length).to.equal(1);
    expect(component.find('[name="password"] input').length).to.equal(1);
    expect(component.find('[name="confirmPassword"] input').length).to.equal(1);
    expect(component.find('[name="acceptTerms"] [type="checkbox"] input').length).to.equal(1);
  });

  it("should role fields has options", () => {
    expect(component.find('[name="role"] select option').length).to.equal(4);
  });

  it("should not shows warning on component render", () => {
    expect(component.find('.invalid-feedback').length).to.equal(0);
  });

  it("should show warning if form is invalid", async () => {
    const onSubmit = ()=> {}
    // const submit = component.find('#submit');
    // expect(submit.length).to.equal(1);
    // submit.simulate("click");
    // component.find('#submit').simulate('submit');
    // expect(component.find('.invalid-feedback').length).to.equal(7);
    await act(async () => {
      component
        .find('input[name="firstName"]')
        .simulate("input", { value: "Hanan" })
        .simulate("blur");
    });

    await act(async () => {
      component.find("form").simulate("submit");
    });

    expect(onSubmit).toHaveBeenLastCalledWith(
      expect.objectContaining({
        firstName: "Hanan"
      })
    );
  });

  it('should display an warning if form is invalid', () => {
    const form = component.find('form').first();
    form.simulate('submit');
    expect(component.find('.invalid-feedback').length).to.equal(7);
  });

});
