/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Sayari from "../../../index";

/**
 * @example
 *     [{
 *             published: "2024-09-15",
 *             riskFlags: ["Sanctions", "Regulatory Action", "Geopolitical Instability"],
 *             searchTerm: [
 *                 "Gazprom",
 *                 [
 *                     "sanctioned entity",
 *                     "trade embargo",
 *                     "international sanction",
 *                     "restricted measures",
 *                     "sanction violation",
 *                     "trade restriction",
 *                     "blacklisted entity",
 *                     "economic sanction",
 *                     "export control"
 *                 ]
 *             ],
 *             snippet: "Prime Ministers of Ukraine and Estonia Denys Shmyhal and Kristen Michal signed a joint statement calling for increased sanctions pressure on Russia and a full trade embargo. \u2014 Ukrinform.",
 *             source: "@ukrinform",
 *             title: "Ukraine, Estonia prime ministers call for imposing sanctions against Rosatom, Gazprom",
 *             url: "https://www.ukrinform.net/rubric-polytics/3935996-ukraine-estonia-prime-ministers-call-for-imposing-sanctions-against-rosatom-gazprom.html"
 *         }]
 *
 * @example
 *     [{
 *             published: "2024-12-10",
 *             riskFlags: ["Deforestation", "Pollution", "Environmental Concerns", "Reputational Concerns"],
 *             searchTerm: [
 *                 "JBS",
 *                 [
 *                     "Deforestation",
 *                     "Environment",
 *                     "Pollution",
 *                     "Carbon Emissions",
 *                     "PFAS",
 *                     "Forever Chemicals",
 *                     "Greenwashing",
 *                     "Endangered Species",
 *                     "Poaching",
 *                     "Wildlife Trafficking",
 *                     "Illegal Logging",
 *                     "Toxic Waste"
 *                 ]
 *             ],
 *             snippet: "Brazil's environmental agency levied $64 million in fines against 23 meatpacking and their suppliers companies for buying and selling cattle raised illegally on deforested land in the Amazon.",
 *             source: "AP News",
 *             title: "Brazil fines meatpacking companies, including giant JBS, for buying illegally raised cattle",
 *             url: "https://apnews.com/article/amazon-deforestation-cattle-jbs-nyse-brazil-76bd1fe0c0f3cd77f0e5a4be8e366ab5"
 *         }]
 *
 * @example
 *     [{
 *             published: "2024-11-12T01:00:41-05:00",
 *             riskFlags: ["Financial Crime", "Law Enforcement", "Regulatory Action", "Financial Concerns"],
 *             searchTerm: [
 *                 "Alameda Research",
 *                 [
 *                     "Bankruptcy",
 *                     "Financial",
 *                     "Layoffs",
 *                     "Insolvency",
 *                     "Money Laundering",
 *                     "Sanctions",
 *                     "Embezzlement",
 *                     "Insider Trading",
 *                     "tax evasion",
 *                     "financial fraud",
 *                     "misappropriation",
 *                     "financial misconduct",
 *                     "financial manipulation",
 *                     "fraudulent activity",
 *                     "financial crime",
 *                     "tax fraud",
 *                     "merger",
 *                     "acquisition",
 *                     "bond ratings",
 *                     "stock price"
 *                 ]
 *             ],
 *             snippet: "Alameda Research, the trading firm affiliated with the collapsed cryptocurrency exchange FTX, has initiated legal action against Aleksandr Ivanov, the founder of Waves, in a bid to recover approximately $90 million in assets as part of Alameda's broader efforts to repay creditors affected by FTX's insolvency in 2022.",
 *             source: "Bitcoinist.com",
 *             title: "Alameda Research Files $90 Million Lawsuit Against Waves Founder Aleksandr Ivanov - Details | Bitcoinist.com",
 *             url: "https://bitcoinist.com/alameda-research-files-90-m-lawsuit-waves-founder/"
 *         }]
 */
export type NegativeNewsResponse = Sayari.Article[];
