import React from "react";
import enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { FormController } from "../components/common/controls";
import { SignupFormFields } from "../constants/forms";

enzyme.configure({ adapter: new Adapter() });
const formControllerWrapper = (props) => {
	const formState = {
		touchedFields: {
			[props.name]: false,
		},
		errors: {
			[props.name]: {
				message: `${props.name} is required!`,
			},
		},
	};

	return mount(
		<FormController
			{...props}
			formState={formState}
			register={(value) => {}}
		/>
	);
};
describe("FormController component should work properly", () => {
	it("should show warning on input, if it has no value", () => {
		const component = formControllerWrapper(SignupFormFields[0]);
		expect(component.find('[name="firstName"] input').length).to.equal(1);
		expect(component.find(".invalid-feedback").text()).to.equal(
			"firstName is required!"
		);
	});

	it("should show select box if type is select", () => {
		const component = formControllerWrapper(SignupFormFields[3]);
		expect(component.find('[type="text"] input').length).to.equal(0);
		expect(component.find('[name="role"] select').length).to.equal(1);
		expect(component.find('[name="role"] select option').length).to.equal(
			4
		);
	});

	it("should show date input if type is date", () => {
		const component = formControllerWrapper(SignupFormFields[4]);
		expect(component.find('[type="text"] input').length).to.equal(0);
		expect(component.find('[name="role"] select').length).to.equal(0);
		expect(component.find('[type="date"] input').length).to.equal(1);
	});

	it("should show checkbox if type is checkbox", () => {
		const component = formControllerWrapper(SignupFormFields[7]);
		expect(component.find('[type="text"] input').length).to.equal(0);
		expect(component.find('[name="role"] select').length).to.equal(0);
		expect(component.find('[type="date"] input').length).to.equal(0);
		expect(component.find('[type="checkbox"] input').length).to.equal(1);
	});
});
