/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type Relationships =
    /**
     * Entities connected to this entity via a type of relationship that does not exist in the Graph ontology */
    | "linked_to"
    /**
     * Shipments this entity sent */
    | "shipper_of"
    /**
     * The entity that sent this shipment */
    | "shipped_by"
    /**
     * Entities from which this entity inherited legal personality */
    | "legal_successor_of"
    /**
     * Successor entities to which this entity granted legal personality */
    | "has_legal_successor"
    /**
     * Companies of which this entity is a direct owner */
    | "shareholder_of"
    /**
     * Direct owners of this company */
    | "has_shareholder"
    /**
     * Entities of which this entity is reported to be (or have acted as) a legal representative */
    | "legal_representative_of"
    /**
     * Entities reported to be (or have acted as) legal representatives of this entity */
    | "has_legal_representative"
    /**
     * Legal Matters in which this entity is a litigant */
    | "party_to"
    /**
     * Litigants in this Legal Matter */
    | "has_party"
    /**
     * Entities with a corporate or statutory body of oversight/control of which this entity is a member */
    | "member_of_the_board_of"
    /**
     * Entities that are members of this entity's corporate or statutory body of oversight/control */
    | "has_member_of_the_board"
    /**
     * Parent companies of which this company is a branch */
    | "branch_of"
    /**
     * Branches of this company */
    | "has_branch"
    /**
     * Deprecated and converted to legal_representative_of */
    | "judidical_representative_of"
    /**
     * Deprecated and converted to legal_representative_of */
    | "has_judicial_representative"
    /**
     * Entities of which this entity is reported to be a supervisor, typically in East Asia */
    | "supervisor_of"
    /**
     * Supervisors of this company, typically in East Asia */
    | "has_supervisor"
    /**
     * Companies of which this entity is a Director */
    | "director_of"
    /**
     * Directors of this company */
    | "has_director"
    /**
     * Legal Matters to which this entity is tied in a professional capacity */
    | "lawyer_in"
    /**
     * Lawyers tied to this Legal Matter in a professional capacity */
    | "has_lawyer"
    /**
     * Deprecated and converted to linked_to */
    | "associate_of"
    /**
     * Deprecated and converted to linked_to */
    | "has_associate"
    /**
     * Securities this entity has issued */
    | "issuer_of"
    /**
     * Companies that issued this security */
    | "has_issuer"
    /**
     * Shipments that this entity were notified of upon their arrival at their destinations */
    | "notify_party_of"
    /**
     * Entity to be notified when this shipment arrives */
    | "has_notify_party"
    /**
     * A placeholder relationship. Rarely used. */
    | "generic"
    /**
     * Entities created by or legally derived from this entity */
    | "legal_predecessor_of"
    /**
     * Entities from which this entity was created or legally derived */
    | "has_legal_predecessor"
    /**
     * Entities that legally founded this company */
    | "founder_of"
    /**
     * The source entity is reported to be the founder of a company */
    | "has_founder"
    /**
     * Deprecated and converted to officer_of (in jurisdictions where the secretary is a fairly important control figure) or registered_agent_of (in jurisdictions where the secretary is more of a clerical role) */
    | "secretary_of"
    /**
     * Deprecated and converted to officer_of (in jurisdictions where the secretary is a fairly important control figure) or registered_agent_of (in jurisdictions where the secretary is more of a clerical role) */
    | "has_secretary"
    /**
     * Entities reported to be beneficially or indirectly owned by this entity */
    | "beneficial_owner_of"
    /**
     * Entities reported to beneficially or indirectly own this entity */
    | "has_beneficial_owner"
    /**
     * Partnerships or similar types of companies of which this entity is a business partner with an ownership stake */
    | "partner_of"
    /**
     * Business partners with an ownership stake in this company */
    | "has_partner"
    /**
     * Entities for which this entity works as a lawyer in a professional capacity */
    | "lawyer_of"
    /**
     * Companies of which this entity is a CEO, Treasurer, etc. */
    | "officer_of"
    /**
     * CEOs, Treasurers, etc. of this company */
    | "has_officer"
    /**
     * Companies of which this entity is an employee */
    | "employee_of"
    /**
     * Employees of this company */
    | "has_employee"
    /**
     * Deprecated and converted to shareholder_of */
    | "sole_proprietor_of"
    /**
     * Deprecated and converted to shareholder_of */
    | "has_sole_proprietor"
    /**
     * Deprecated and converted to officer_of */
    | "executive_of"
    /**
     * Deprecated and converted to officer_of */
    | "has_executive"
    /**
     * Deprecated and converted to linked_to */
    | "client_of"
    /**
     * Deprecated and converted to linked_to */
    | "has_client"
    /**
     * The entity in charge of the transportation of goods */
    | "carrier_of"
    /**
     * The shipment carrying the goods */
    | "has_carrier"
    /**
     * Family members of this entity */
    | "family_of"
    /**
     * Non-corporate entities (trade name, security, intellectual property, etc.) directly owned by this entity */
    | "owner_of"
    /**
     * Direct owners of this entity */
    | "has_owner"
    /**
     * The entity who has sent a shipment */
    | "ships_to"
    /**
     * The entity that has received a shipment */
    | "receives_from"
    /**
     * Entities of which this entity is reported to be a Registered Agent, corporate secretary, or similar */
    | "registered_agent_of"
    /**
     * Entities acting in a Registered Agent, corporate secretary, or similar role for this entity */
    | "has_registered_agent"
    /**
     * Companies of which this entity is a Manager */
    | "manager_of"
    /**
     * Managers of this company */
    | "has_manager"
    /**
     * Companies that indirectly own this company and/or report it as a subsidiary */
    | "subsidiary_of"
    /**
     * Companies reported to be subsidiaries or indirectly owned by this company */
    | "has_subsidiary"
    /**
     * Companies of which this entity is a liquidator */
    | "liquidator_of"
    /**
     * Liquidators of this company */
    | "has_liquidator"
    /**
     * Deprecated and converted to legal_representative_of */
    | "judicial_representative_of"
    /**
     * Shipments this entity received */
    | "receiver_of"
    /**
     * The entity that received this shipment */
    | "received_by"
    /**
     * Companies audited by this entity */
    | "auditor_of"
    /**
     * Auditors of this company */
    | "has_auditor"
    | "possibly_same_as";

export const Relationships = {
    LinkedTo: "linked_to",
    ShipperOf: "shipper_of",
    ShippedBy: "shipped_by",
    LegalSuccessorOf: "legal_successor_of",
    HasLegalSuccessor: "has_legal_successor",
    ShareholderOf: "shareholder_of",
    HasShareholder: "has_shareholder",
    LegalRepresentativeOf: "legal_representative_of",
    HasLegalRepresentative: "has_legal_representative",
    PartyTo: "party_to",
    HasParty: "has_party",
    MemberOfTheBoardOf: "member_of_the_board_of",
    HasMemberOfTheBoard: "has_member_of_the_board",
    BranchOf: "branch_of",
    HasBranch: "has_branch",
    JudidicalRepresentativeOf: "judidical_representative_of",
    HasJudicialRepresentative: "has_judicial_representative",
    SupervisorOf: "supervisor_of",
    HasSupervisor: "has_supervisor",
    DirectorOf: "director_of",
    HasDirector: "has_director",
    LawyerIn: "lawyer_in",
    HasLawyer: "has_lawyer",
    AssociateOf: "associate_of",
    HasAssociate: "has_associate",
    IssuerOf: "issuer_of",
    HasIssuer: "has_issuer",
    NotifyPartyOf: "notify_party_of",
    HasNotifyParty: "has_notify_party",
    Generic: "generic",
    LegalPredecessorOf: "legal_predecessor_of",
    HasLegalPredecessor: "has_legal_predecessor",
    FounderOf: "founder_of",
    HasFounder: "has_founder",
    SecretaryOf: "secretary_of",
    HasSecretary: "has_secretary",
    BeneficialOwnerOf: "beneficial_owner_of",
    HasBeneficialOwner: "has_beneficial_owner",
    PartnerOf: "partner_of",
    HasPartner: "has_partner",
    LawyerOf: "lawyer_of",
    OfficerOf: "officer_of",
    HasOfficer: "has_officer",
    EmployeeOf: "employee_of",
    HasEmployee: "has_employee",
    SoleProprietorOf: "sole_proprietor_of",
    HasSoleProprietor: "has_sole_proprietor",
    ExecutiveOf: "executive_of",
    HasExecutive: "has_executive",
    ClientOf: "client_of",
    HasClient: "has_client",
    CarrierOf: "carrier_of",
    HasCarrier: "has_carrier",
    FamilyOf: "family_of",
    OwnerOf: "owner_of",
    HasOwner: "has_owner",
    ShipsTo: "ships_to",
    ReceivesFrom: "receives_from",
    RegisteredAgentOf: "registered_agent_of",
    HasRegisteredAgent: "has_registered_agent",
    ManagerOf: "manager_of",
    HasManager: "has_manager",
    SubsidiaryOf: "subsidiary_of",
    HasSubsidiary: "has_subsidiary",
    LiquidatorOf: "liquidator_of",
    HasLiquidator: "has_liquidator",
    JudicialRepresentativeOf: "judicial_representative_of",
    ReceiverOf: "receiver_of",
    ReceivedBy: "received_by",
    AuditorOf: "auditor_of",
    HasAuditor: "has_auditor",
    PossiblySameAs: "possibly_same_as",
} as const;
