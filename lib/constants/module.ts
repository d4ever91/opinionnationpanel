export interface Module {
  _id?:string;
  name?: string;
  label?: string;
  icon?: string;
  route?:string;
  isActive?:boolean,
  isDeleted?:boolean,
}

export interface ModulePayload {
  module?:Module,
}


