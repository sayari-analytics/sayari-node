/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type Relationships =
    /**
     * Entities for which this entity works as a lawyer in a professional capacity */
    | "lawyer_of"
    /**
     * Lawyers reported to work for this entity in a professional capacity */
    | "has_lawyer"
    /**
     * Entities that legally founded this company */
    | "founder_of"
    /**
     * The source entity is reported to be the founder of a company */
    | "has_founder"
    /**
     * Entities created by or legally derived from this entity */
    | "legal_predecessor_of"
    /**
     * Entities from which this entity was created or legally derived */
    | "has_legal_predecessor"
    /**
     * Legal Matters to which this entity is tied in a professional capacity */
    | "lawyer_in"
    /**
     * Shipments this entity sent */
    | "shipper_of"
    /**
     * The entity that sent this shipment */
    | "shipped_by"
    /**
     * Deprecated and converted to linked_to */
    | "associate_of"
    /**
     * Deprecated and converted to linked_to */
    | "has_associate"
    /**
     * Deprecated and converted to legal_representative_of */
    | "judicial_representative_of"
    /**
     * Deprecated and converted to legal_representative_of */
    | "has_judicial_representative"
    /**
     * Deprecated and converted to shareholder_of */
    | "sole_proprietor_of"
    /**
     * Deprecated and converted to shareholder_of */
    | "has_sole_proprietor"
    /**
     * Companies of which this entity is a direct owner */
    | "shareholder_of"
    /**
     * Direct owners of this company */
    | "has_shareholder"
    /**
     * Companies that indirectly own this company and/or report it as a subsidiary */
    | "subsidiary_of"
    /**
     * Companies reported to be subsidiaries or indirectly owned by this company */
    | "has_subsidiary"
    /**
     * Deprecated and converted to officer_of */
    | "executive_of"
    /**
     * Deprecated and converted to officer_of */
    | "has_executive"
    /**
     * Companies of which this entity is a liquidator */
    | "liquidator_of"
    /**
     * Liquidators of this company */
    | "has_liquidator"
    /**
     * Entities of which this entity is reported to be a Registered Agent, corporate secretary, or similar */
    | "registered_agent_of"
    /**
     * Entities acting in a Registered Agent, corporate secretary, or similar role for this entity */
    | "has_registered_agent"
    /**
     * Companies audited by this entity */
    | "auditor_of"
    /**
     * Auditors of this company */
    | "has_auditor"
    /**
     * Entities of which this entity is reported to be (or have acted as) a legal representative */
    | "legal_representative_of"
    /**
     * Entities reported to be (or have acted as) legal representatives of this entity */
    | "has_legal_representative"
    /**
     * Deprecated and converted to legal_representative_of */
    | "judidical_representative_of"
    /**
     * Companies of which this entity is an employee */
    | "employee_of"
    /**
     * Employees of this company */
    | "has_employee"
    /**
     * Companies of which this entity is a CEO, Treasurer, etc. */
    | "officer_of"
    /**
     * CEOs, Treasurers, etc. of this company */
    | "has_officer"
    /**
     * A placeholder relationship. Rarely used. */
    | "generic"
    /**
     * Entities with a corporate or statutory body of oversight/control of which this entity is a member */
    | "member_of_the_board_of"
    /**
     * Entities that are members of this entity's corporate or statutory body of oversight/control */
    | "has_member_of_the_board"
    /**
     * Shipments that this entity were notified of upon their arrival at their destinations */
    | "notify_party_of"
    /**
     * Entity to be notified when this shipment arrives */
    | "has_notify_party"
    /**
     * Entities reported to be beneficially or indirectly owned by this entity */
    | "beneficial_owner_of"
    /**
     * Entities reported to beneficially or indirectly own this entity */
    | "has_beneficial_owner"
    /**
     * Deprecated and converted to linked_to */
    | "client_of"
    /**
     * Deprecated and converted to linked_to */
    | "has_client"
    /**
     * Partnerships or similar types of companies of which this entity is a business partner with an ownership stake */
    | "partner_of"
    /**
     * Business partners with an ownership stake in this company */
    | "has_partner"
    /**
     * Securities this entity has issued */
    | "issuer_of"
    /**
     * Companies that issued this security */
    | "has_issuer"
    /**
     * Parent companies of which this company is a branch */
    | "branch_of"
    /**
     * Branches of this company */
    | "has_branch"
    /**
     * Deprecated and converted to officer_of (in jurisdictions where the secretary is a fairly important control figure) or registered_agent_of (in jurisdictions where the secretary is more of a clerical role) */
    | "secretary_of"
    /**
     * Deprecated and converted to officer_of (in jurisdictions where the secretary is a fairly important control figure) or registered_agent_of (in jurisdictions where the secretary is more of a clerical role) */
    | "has_secretary"
    /**
     * Legal Matters in which this entity is a litigant */
    | "party_to"
    /**
     * Litigants in this Legal Matter */
    | "has_party"
    /**
     * Entities from which this entity inherited legal personality */
    | "legal_successor_of"
    /**
     * Successor entities to which this entity granted legal personality */
    | "has_legal_successor"
    /**
     * Shipments this entity received */
    | "receiver_of"
    /**
     * The entity that received this shipment */
    | "received_by"
    /**
     * Non-corporate entities (trade name, security, intellectual property, etc.) directly owned by this entity */
    | "owner_of"
    /**
     * Direct owners of this entity */
    | "has_owner"
    /**
     * Entities connected to this entity via a type of relationship that does not exist in the Graph ontology */
    | "linked_to"
    /**
     * Entities of which this entity is reported to be a supervisor, typically in East Asia */
    | "supervisor_of"
    /**
     * Supervisors of this company, typically in East Asia */
    | "has_supervisor"
    /**
     * Companies of which this entity is a Manager */
    | "manager_of"
    /**
     * Managers of this company */
    | "has_manager"
    /**
     * Family members of this entity */
    | "family_of"
    /**
     * The entity in charge of the transportation of goods */
    | "carrier_of"
    /**
     * The shipment carrying the goods */
    | "has_carrier"
    /**
     * The entity who has sent a shipment */
    | "ships_to"
    /**
     * The entity that has received a shipment */
    | "receives_from"
    /**
     * Companies of which this entity is a Director */
    | "director_of"
    /**
     * Directors of this company */
    | "has_director"
    | "possibly_same_as";

export const Relationships = {
    LawyerOf: "lawyer_of",
    HasLawyer: "has_lawyer",
    FounderOf: "founder_of",
    HasFounder: "has_founder",
    LegalPredecessorOf: "legal_predecessor_of",
    HasLegalPredecessor: "has_legal_predecessor",
    LawyerIn: "lawyer_in",
    ShipperOf: "shipper_of",
    ShippedBy: "shipped_by",
    AssociateOf: "associate_of",
    HasAssociate: "has_associate",
    JudicialRepresentativeOf: "judicial_representative_of",
    HasJudicialRepresentative: "has_judicial_representative",
    SoleProprietorOf: "sole_proprietor_of",
    HasSoleProprietor: "has_sole_proprietor",
    ShareholderOf: "shareholder_of",
    HasShareholder: "has_shareholder",
    SubsidiaryOf: "subsidiary_of",
    HasSubsidiary: "has_subsidiary",
    ExecutiveOf: "executive_of",
    HasExecutive: "has_executive",
    LiquidatorOf: "liquidator_of",
    HasLiquidator: "has_liquidator",
    RegisteredAgentOf: "registered_agent_of",
    HasRegisteredAgent: "has_registered_agent",
    AuditorOf: "auditor_of",
    HasAuditor: "has_auditor",
    LegalRepresentativeOf: "legal_representative_of",
    HasLegalRepresentative: "has_legal_representative",
    JudidicalRepresentativeOf: "judidical_representative_of",
    EmployeeOf: "employee_of",
    HasEmployee: "has_employee",
    OfficerOf: "officer_of",
    HasOfficer: "has_officer",
    Generic: "generic",
    MemberOfTheBoardOf: "member_of_the_board_of",
    HasMemberOfTheBoard: "has_member_of_the_board",
    NotifyPartyOf: "notify_party_of",
    HasNotifyParty: "has_notify_party",
    BeneficialOwnerOf: "beneficial_owner_of",
    HasBeneficialOwner: "has_beneficial_owner",
    ClientOf: "client_of",
    HasClient: "has_client",
    PartnerOf: "partner_of",
    HasPartner: "has_partner",
    IssuerOf: "issuer_of",
    HasIssuer: "has_issuer",
    BranchOf: "branch_of",
    HasBranch: "has_branch",
    SecretaryOf: "secretary_of",
    HasSecretary: "has_secretary",
    PartyTo: "party_to",
    HasParty: "has_party",
    LegalSuccessorOf: "legal_successor_of",
    HasLegalSuccessor: "has_legal_successor",
    ReceiverOf: "receiver_of",
    ReceivedBy: "received_by",
    OwnerOf: "owner_of",
    HasOwner: "has_owner",
    LinkedTo: "linked_to",
    SupervisorOf: "supervisor_of",
    HasSupervisor: "has_supervisor",
    ManagerOf: "manager_of",
    HasManager: "has_manager",
    FamilyOf: "family_of",
    CarrierOf: "carrier_of",
    HasCarrier: "has_carrier",
    ShipsTo: "ships_to",
    ReceivesFrom: "receives_from",
    DirectorOf: "director_of",
    HasDirector: "has_director",
    PossiblySameAs: "possibly_same_as",
} as const;
