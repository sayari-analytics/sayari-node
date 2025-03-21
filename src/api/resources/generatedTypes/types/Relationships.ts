/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type Relationships =
    /**
     * Deprecated and converted to linked_to */
    | "associate_of"
    /**
     * Deprecated and converted to linked_to */
    | "has_associate"
    /**
     * Companies audited by this entity */
    | "auditor_of"
    /**
     * Auditors of this company */
    | "has_auditor"
    /**
     * Entities reported to be beneficially or indirectly owned by this entity */
    | "beneficial_owner_of"
    /**
     * Entities reported to beneficially or indirectly own this entity */
    | "has_beneficial_owner"
    /**
     * Parent companies of which this company is a branch */
    | "branch_of"
    /**
     * Branches of this company */
    | "has_branch"
    /**
     * The entity in charge of the transportation of goods */
    | "carrier_of"
    /**
     * The shipment carrying the goods */
    | "has_carrier"
    /**
     * Deprecated and converted to linked_to */
    | "client_of"
    /**
     * Deprecated and converted to linked_to */
    | "has_client"
    /**
     * The transaction credits to the entity */
    | "credits_to"
    /**
     * The entity receives a credit from the transaction */
    | "credited_by"
    /**
     * The transaction debits from the entity */
    | "debits_from"
    /**
     * The entity is debited by the transaction */
    | "debited_by"
    /**
     * Companies of which this entity is a Director */
    | "director_of"
    /**
     * Directors of this company */
    | "has_director"
    /**
     * Companies of which this entity is an employee */
    | "employee_of"
    /**
     * Employees of this company */
    | "has_employee"
    /**
     * Deprecated and converted to officer_of */
    | "executive_of"
    /**
     * Deprecated and converted to officer_of */
    | "has_executive"
    /**
     * Family members of this entity */
    | "family_of"
    /**
     * Entities that legally founded this company */
    | "founder_of"
    /**
     * The source entity is reported to be the founder of a company */
    | "has_founder"
    /**
     * A placeholder relationship. Rarely used. */
    | "generic"
    /**
     * Securities this entity has issued */
    | "issuer_of"
    /**
     * Companies that issued this security */
    | "has_issuer"
    /**
     * Deprecated and converted to legal_representative_of */
    | "judicial_representative_of"
    /**
     * Deprecated and converted to legal_representative_of */
    | "has_judicial_representative"
    /**
     * Deprecated and converted to legal_representative_of */
    | "judidical_representative_of"
    /**
     * Legal Matters to which this entity is tied in a professional capacity */
    | "lawyer_in"
    /**
     * Lawyers tied to this Legal Matter in a professional capacity */
    | "has_lawyer"
    /**
     * Entities for which this entity works as a lawyer in a professional capacity */
    | "lawyer_of"
    /**
     * Entities created by or legally derived from this entity */
    | "legal_predecessor_of"
    /**
     * Entities from which this entity was created or legally derived */
    | "has_legal_predecessor"
    /**
     * Entities of which this entity is reported to be (or have acted as) a legal representative */
    | "legal_representative_of"
    /**
     * Entities reported to be (or have acted as) legal representatives of this entity */
    | "has_legal_representative"
    /**
     * Entities from which this entity inherited legal personality */
    | "legal_successor_of"
    /**
     * Successor entities to which this entity granted legal personality */
    | "has_legal_successor"
    /**
     * Entities connected to this entity via a type of relationship that does not exist in the Graph ontology */
    | "linked_to"
    /**
     * Companies of which this entity is a liquidator */
    | "liquidator_of"
    /**
     * Liquidators of this company */
    | "has_liquidator"
    /**
     * Companies of which this entity is a Manager */
    | "manager_of"
    /**
     * Managers of this company */
    | "has_manager"
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
     * Companies of which this entity is a CEO, Treasurer, etc. */
    | "officer_of"
    /**
     * CEOs, Treasurers, etc. of this company */
    | "has_officer"
    /**
     * Non-corporate entities (trade name, security, intellectual property, account, etc.) directly owned by this entity */
    | "owner_of"
    /**
     * Direct owners of this entity */
    | "has_owner"
    /**
     * Partnerships or similar types of companies of which this entity is a business partner with an ownership stake */
    | "partner_of"
    /**
     * Business partners with an ownership stake in this company */
    | "has_partner"
    /**
     * Legal Matters in which this entity is a litigant */
    | "party_to"
    /**
     * Litigants in this Legal Matter */
    | "has_party"
    /**
     * Shipments this entity received */
    | "receiver_of"
    /**
     * The entity that received this shipment */
    | "received_by"
    /**
     * Entities of which this entity is reported to be a Registered Agent, corporate secretary, or similar */
    | "registered_agent_of"
    /**
     * Entities acting in a Registered Agent, corporate secretary, or similar role for this entity */
    | "has_registered_agent"
    /**
     * Deprecated and converted to officer_of (in jurisdictions where the secretary is a fairly important control figure) or registered_agent_of (in jurisdictions where the secretary is more of a clerical role) */
    | "secretary_of"
    /**
     * Deprecated and converted to officer_of (in jurisdictions where the secretary is a fairly important control figure) or registered_agent_of (in jurisdictions where the secretary is more of a clerical role) */
    | "has_secretary"
    /**
     * Companies of which this entity is a direct owner */
    | "shareholder_of"
    /**
     * Direct owners of this company */
    | "has_shareholder"
    /**
     * Shipments this entity sent */
    | "shipper_of"
    /**
     * The entity that sent this shipment */
    | "shipped_by"
    /**
     * The entity who has sent a shipment */
    | "ships_to"
    /**
     * The entity that has received a shipment */
    | "receives_from"
    /**
     * Deprecated and converted to shareholder_of */
    | "sole_proprietor_of"
    /**
     * Deprecated and converted to shareholder_of */
    | "has_sole_proprietor"
    /**
     * Companies that indirectly own this company and/or report it as a subsidiary */
    | "subsidiary_of"
    /**
     * Companies reported to be subsidiaries or indirectly owned by this company */
    | "has_subsidiary"
    /**
     * Entities of which this entity is reported to be a supervisor, typically in East Asia */
    | "supervisor_of"
    /**
     * Supervisors of this company, typically in East Asia */
    | "has_supervisor"
    /**
     * The entity transfers to another entity */
    | "transfers_to"
    /**
     * The entity transfers from another entity */
    | "transfers_from"
    | "possibly_same_as";
export const Relationships = {
    AssociateOf: "associate_of",
    HasAssociate: "has_associate",
    AuditorOf: "auditor_of",
    HasAuditor: "has_auditor",
    BeneficialOwnerOf: "beneficial_owner_of",
    HasBeneficialOwner: "has_beneficial_owner",
    BranchOf: "branch_of",
    HasBranch: "has_branch",
    CarrierOf: "carrier_of",
    HasCarrier: "has_carrier",
    ClientOf: "client_of",
    HasClient: "has_client",
    CreditsTo: "credits_to",
    CreditedBy: "credited_by",
    DebitsFrom: "debits_from",
    DebitedBy: "debited_by",
    DirectorOf: "director_of",
    HasDirector: "has_director",
    EmployeeOf: "employee_of",
    HasEmployee: "has_employee",
    ExecutiveOf: "executive_of",
    HasExecutive: "has_executive",
    FamilyOf: "family_of",
    FounderOf: "founder_of",
    HasFounder: "has_founder",
    Generic: "generic",
    IssuerOf: "issuer_of",
    HasIssuer: "has_issuer",
    JudicialRepresentativeOf: "judicial_representative_of",
    HasJudicialRepresentative: "has_judicial_representative",
    JudidicalRepresentativeOf: "judidical_representative_of",
    LawyerIn: "lawyer_in",
    HasLawyer: "has_lawyer",
    LawyerOf: "lawyer_of",
    LegalPredecessorOf: "legal_predecessor_of",
    HasLegalPredecessor: "has_legal_predecessor",
    LegalRepresentativeOf: "legal_representative_of",
    HasLegalRepresentative: "has_legal_representative",
    LegalSuccessorOf: "legal_successor_of",
    HasLegalSuccessor: "has_legal_successor",
    LinkedTo: "linked_to",
    LiquidatorOf: "liquidator_of",
    HasLiquidator: "has_liquidator",
    ManagerOf: "manager_of",
    HasManager: "has_manager",
    MemberOfTheBoardOf: "member_of_the_board_of",
    HasMemberOfTheBoard: "has_member_of_the_board",
    NotifyPartyOf: "notify_party_of",
    HasNotifyParty: "has_notify_party",
    OfficerOf: "officer_of",
    HasOfficer: "has_officer",
    OwnerOf: "owner_of",
    HasOwner: "has_owner",
    PartnerOf: "partner_of",
    HasPartner: "has_partner",
    PartyTo: "party_to",
    HasParty: "has_party",
    ReceiverOf: "receiver_of",
    ReceivedBy: "received_by",
    RegisteredAgentOf: "registered_agent_of",
    HasRegisteredAgent: "has_registered_agent",
    SecretaryOf: "secretary_of",
    HasSecretary: "has_secretary",
    ShareholderOf: "shareholder_of",
    HasShareholder: "has_shareholder",
    ShipperOf: "shipper_of",
    ShippedBy: "shipped_by",
    ShipsTo: "ships_to",
    ReceivesFrom: "receives_from",
    SoleProprietorOf: "sole_proprietor_of",
    HasSoleProprietor: "has_sole_proprietor",
    SubsidiaryOf: "subsidiary_of",
    HasSubsidiary: "has_subsidiary",
    SupervisorOf: "supervisor_of",
    HasSupervisor: "has_supervisor",
    TransfersTo: "transfers_to",
    TransfersFrom: "transfers_from",
    PossiblySameAs: "possibly_same_as",
} as const;
