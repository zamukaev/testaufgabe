//############Invoice interfaces###########
interface Invoice_attributes {
	invoice_number: string;
	invoice_date: string;
	invoice_amount: string;
	reimbursed: boolean;
}
interface Invoice_links {
	self: string;
}
interface Invoice_property_damage_link {
	related: string;
}
interface Invoice_property_damage_data_type {
	type: string;
	id: string;
}

interface Invoice_property_damage_items {
	links: Invoice_property_damage_link;
	data: Invoice_property_damage_data_type
}
interface Invoice_property_damage {
	property_damage: Invoice_property_damage_items;
}
export interface IInvoice {
	type: string,
	id: string;
	attributes: Invoice_attributes;
	relationships: Invoice_property_damage;
	links: Invoice_links;
}

//############IPropertyDamage interfaces###########

interface IPropertyDamage_attributes {
	identification_number: string;
	damage_date: string;
	report_date: string;
}
interface IPropertyDamage_relationships_residential_building {
	links: Invoice_property_damage_link;
	data: Invoice_property_damage_data_type;
}
export interface IPropertyDamage_invoices_data {
	type: string;
	id: string;
}
interface IPropertyDamage_invoices {
	meta: { count: string };
	data: IPropertyDamage_invoices_data[];
	links: Invoice_property_damage_link;
}

interface IPropertyDamage_relationships {
	invoices: IPropertyDamage_invoices;
	residential_building: IPropertyDamage_relationships_residential_building;
}

export interface IPropertyDamage {
	type: string;
	id: string;
	attributes: IPropertyDamage_attributes;
	relationships: IPropertyDamage_relationships;
	links: Invoice_links;
}
//################ResidentialBuilding interfaces###################

interface ResidentialBuilding_attributes {
	street_name: string;
	building_number: string;
	postcode: string;
	city: string;
	country: string;
	sqm: string;
	address_full: string;
}
interface ResidentialBuilding_ropertydamages {
	ropertydamages: IPropertyDamage_invoices;
}

export interface IResidentialBuilding {
	type: string;
	id: string;
	attributes: ResidentialBuilding_attributes;
	relationships: ResidentialBuilding_ropertydamages;
	links: Invoice_links;
}