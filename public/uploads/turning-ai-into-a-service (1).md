# Turning AI into a Service

*How my enterprise software model maps to OpenAI's AI value models*

<!--
VISUAL SYSTEM FOR THIS POST

Use the same visual language as the original enterprise software post: white background, charcoal text, muted blue accents, thin light-grey rules and compact uppercase figure labels. The diagrams should feel like operating-model artifacts rather than marketing illustrations.

Keep labels short and readable at normal blog width. Use simple geometric shapes, generous spacing and one clear visual hierarchy. Avoid robots, brains, circuit patterns, glowing gradients, stock photography and decorative AI imagery.

Create each visual as a responsive vector graphic where possible. Design a full-width desktop version and a simplified stacked mobile version. Include the supplied caption and alt text. If hover states are supported, use them only for secondary explanation; the core meaning must remain visible without interaction.
-->

In my previous post, I wrote about the challenge of finding value in enterprise software once the implementation is finished. The approach I used with customers was to stop treating the platform as a tool and start treating it as a service.

In practice, that meant putting three things around the technology: an intake process for new use cases, a catalog for repeatable requests, and a small set of artifacts to make ownership, priorities and value visible.

I ended that post with a note that the same model might be worth revisiting for AI. OpenAI's article on [five AI value models](https://openai.com/index/the-five-ai-value-models-driving-business-reinvention/) gave me a useful structure for doing that.

## OpenAI's view in short

OpenAI describes five value models rather than five maturity levels. I do not read them as a strict ladder. An organization may work across several at the same time, although the capabilities built in one can make the later models easier to operate.

1. **Workforce empowerment**

   AI is made available broadly so that people can use it in their day-to-day work. The immediate benefit may be productivity, but the wider purpose is to build fluency, reusable ways of working and enough shared understanding to make governance practical.

2. **AI-native distribution**

   AI becomes part of how customers discover, assess and buy products or services. This moves the focus away from reach alone and towards being useful and trusted when a customer is making a decision.

3. **Expert capability**

   Specialized AI is introduced into research, creative or domain-heavy work. Experts spend less time producing every first draft themselves and more time directing, reviewing and integrating the output.

4. **Systems and dependency management**

   AI helps make controlled changes across connected systems and artifacts. The concern here is less about generating more content and more about consistency, traceability and avoiding downstream breakage.

5. **Process re-engineering with agents**

   Agents take responsibility for larger parts of an end-to-end workflow. This is where identity, permissions, observability, exception handling and clear ownership become prerequisites rather than supporting details.

<!--
FIG. 01: THE FIVE AI VALUE MODELS

Suggested filename: fig-01-five-ai-value-models.svg

Purpose: Give the reader a quick overview of OpenAI's model while avoiding the impression of a mandatory five-step ladder.

Layout: Create five equal cards in one horizontal portfolio. Label them 01 to 05 and use these short descriptors:

1. Workforce empowerment: Fluency and reusable workflows
2. AI-native distribution: Trust at moments of customer intent
3. Expert capability: Faster and broader expert work
4. Systems and dependencies: Controlled change across connected artifacts
5. Process re-engineering: End-to-end workflows with agents

Place a light shared foundation underneath all five cards with the text "Capabilities can compound across the portfolio." Use subtle connectors between adjacent cards, but do not use a staircase or maturity curve.

Below the foundation, add three overlapping phase brackets:

- Build fluency and trust
- Capture value and raise the ceiling
- Scale with confidence and reinvent

The brackets should overlap slightly to show that the phases are not rigid boundaries.

Optional hover: Reveal OpenAI's suggested measurement focus for each card, such as repeated use, conversion quality, quality and cycle time, safe change, or end-to-end workflow outcomes.

Caption: OpenAI describes five value models that can reinforce each other rather than a fixed sequence every organization must follow.

Alt text: Five AI value models shown as a connected portfolio above three overlapping adoption phases.
-->

OpenAI groups the practical adoption path into three broader phases: build fluency and trust, capture value and raise the ceiling, then scale with confidence and reconsider the operating model.

## Where my service approach fits

The five value models describe where an organization may create value with AI. My service approach is more concerned with how a team receives demand, decides what to work on and turns a capability into something the organization can rely on.

I therefore see it as a practical structure around the OpenAI model rather than an alternative to it.

| OpenAI value model | Where the service approach contributes |
| --- | --- |
| **Workforce empowerment** | A small service catalog gives employees useful starting points. Guidelines, named owners and a governance board make acceptable use clearer and give people somewhere to take questions and problems. The intake process also gives power users a route for sharing new workflows with the wider organization. |
| **AI-native distribution** | Intake and value tracking can help decide which customer-facing experiences are worth developing. Because my original model was designed for an internal platform, this would also require product management, customer research and measures such as conversion quality. |
| **Expert capability** | The use-case lane provides a place for domain-heavy work that needs a clear owner, expert review and an agreed definition of good. The success plan and value tracker can capture cycle-time, quality and the scope of work made possible. |
| **Systems and dependency management** | The roadmap, program tracker, guidelines and governance board provide part of the control structure. A dependency map, versioning, approval evidence and a clearer record of downstream changes would extend it. |
| **Process re-engineering with agents** | The model becomes a lifecycle for deciding which workflows should become agents, proving that they work and operating the successful ones as managed services with clear ownership and exception handling. |

Put against OpenAI's three adoption phases, the service catalog and guidelines support fluency and trust. The intake process, success plan and value tracker help capture value. The roadmap, governance board and new technical controls then support the move into connected systems and agents.

## The two lanes become more important with agents

My original model separated demand into two lanes.

The service lane handled predefined, low-complexity requests. The use-case lane handled work that was unique, less certain and potentially more valuable.

For AI, I would keep that split, with one additional check: does this request require an agent at all?

OpenAI's [practical guide to building agents](https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/) suggests three signals: nuanced decisions and exceptions, rules that have become difficult to maintain, or a heavy reliance on unstructured information. If none of those are present, a template, a conventional automation or an existing AI feature may be the better service.

This gives the two lanes a clearer role:

- **Service lane:** repeatable requests with a known outcome. These can be delivered through templates, deterministic automation or an existing AI capability. An agent is not the default.

- **Use-case lane:** workflows with ambiguity, judgment or several systems involved. These can be assessed as agent candidates, provided the value and risk justify the work.

A successful agent use case can eventually graduate into the service catalog, just as a proven use case did in my original model. I would then treat it less as an experiment and more as a managed agent service, with an owner, a defined scope, expected service levels and a known route for exceptions.

<!--
FIG. 02: TWO LANES FOR AI DEMAND

Suggested filename: fig-02-two-lanes-for-ai-demand.svg

Purpose: Update the two-lane diagram from the original post and make the decision to use an agent explicit.

Layout: Start with "New request" on the left, followed by a decision gate labelled "What kind of work is this?" Split into two horizontal lanes.

Top lane: SERVICE LANE

- Signals: Repeatable, predictable, known outcome
- Delivery options: Template, deterministic automation, existing AI capability
- Route: Standard request to catalog form to platform team to delivery in days

Bottom lane: USE-CASE LANE

- Signals: Judgment, exceptions, brittle rules, unstructured information, several systems
- Route: Value and risk gate to single-agent pilot to evaluations and human review to roadmap decision
- End state: If proven and repeatable, graduate to "Managed agent service" in the service catalog

Show a return loop from failed evaluation back to the pilot, plus a documented stop decision when value or safety cannot be demonstrated. Make the service catalog the shared destination on the right, but visually distinguish conventional services from managed agent services.

Add a small callout above the split: "An agent is not the default."

Optional hover: Explain the three agent signals from OpenAI's guide and show one example for each lane.

Caption: Predictable work stays in the service lane; ambiguous workflows enter the use-case lane and graduate only after value, quality and controls are demonstrated.

Alt text: An AI request intake process split between a standard service lane and an agent use-case lane, both feeding a managed service catalog.
-->

## Mapping the service artifacts to an agent

OpenAI describes the basic design of an agent through three components: a model, tools and instructions. The guide then adds orchestration, guardrails and human intervention as the agent moves towards production.

Most of my original service artifacts have a natural place in that structure.

| Original service component | Role when building an agent service |
| --- | --- |
| **Use-case lead** | Becomes the accountable service owner and owns the workflow from initial request through production. |
| **Guidelines** | Provide the source for agent instructions, policies, decision rules and expected handling of edge cases. |
| **Service catalog** | Lists the agent services that are proven and repeatable. Underneath it, the tools used by those agents also need standardized definitions and owners. |
| **Success plan** | Defines the expected outcome, acceptance criteria and the evidence required before wider rollout. |
| **Value tracker** | Tracks business value together with quality, errors, exception rates, human escalations and rework. |
| **Roadmap and program tracker** | Manage capability releases, dependencies, integrations and planned improvements. |
| **Governance board** | Decides which data and actions an agent may access, which actions require approval and when work must return to a person. |

Three additions would be needed in the original governance house.

First, evaluations and observability. The team needs a definition of good, a way to test against it and a record of what the agent did when something goes wrong.

Second, permissions at tool and action level. Reading a policy document is not the same risk as changing a customer record or approving a payment. The governance process should treat them differently.

Third, human intervention as part of the service design. An escalation is not only a failure path. Early on, it is also how the team finds edge cases and improves the workflow.

<!--
FIG. 03: THE GOVERNANCE HOUSE FOR AGENT SERVICES

Suggested filename: fig-03-agent-service-governance-house.svg

Purpose: Revisit the governance house from the original post and show what needs to be added when the service can make decisions and take actions.

Layout: Keep the same house metaphor and overall proportions as the original visual.

Roof:

- MANAGED AI AND AGENT SERVICE
- What the organization can depend on

Six pillars, from left to right:

1. Roadmap: What comes next
2. Program and dependency tracker: What is connected and in flight
3. Instructions and guidelines: How the agent should behave
4. Success plan and evaluations: What good looks like
5. Value and quality tracker: What it delivered and how well
6. Governance board: Who decides and when a person intervenes

Add three blue crossbeams spanning all pillars:

- Observability and logs
- Tool permissions and action risk
- Exception handling and human handoff

Foundation:

- IT and business objectives
- Accountable service owner

Use muted grey for the structure inherited from the original service model and blue for the AI-specific additions. This should make the extension visible without suggesting that the original model is replaced.

Optional hover: Show the owner, evidence and review frequency for each pillar and crossbeam.

Caption: The original governance structure still carries the service, while agents add technical controls around evaluation, access and human intervention.

Alt text: A governance house for managed agent services, with six service-management pillars and three AI-specific control layers.
-->

## How the intake process changes

The original process still works, but a few additional decisions are needed before anything is called an agent:

1. What business outcome is the workflow meant to improve, and who owns it?
2. Is the work ambiguous enough to justify an agent, or would simpler automation be sufficient?
3. What data and actions does the agent require, and what permissions come with them?
4. How will quality be evaluated before and after release?
5. Which decisions can the agent make alone, and which require a person?
6. What has to be true before the workflow can graduate into the service catalog?

The guide's incremental approach also fits the service model. Start with one agent and a limited set of tools, test it with real users, and only introduce multiple agents when the workflow requires the additional complexity.

## My current reflection

Looking back, turning a platform into a service was mainly a way to connect technology with people, process, ownership and value. That logic still applies to AI, but the consequences are larger once the technology can make decisions and take actions.

The OpenAI model helps describe how the ambition can develop: from helping individuals, to improving expert work, to managing connected systems and eventually redesigning workflows with agents.

My original model provides a practical way to manage that progression. It helps decide what enters the roadmap, what remains a simple request, what deserves to become an agent, and what is mature enough to be offered as a repeatable service.

The part missing for AI is the operational evidence around it: evaluations, permissions, logs and a clear way back to a person.

For me, that is the difference between having an agent that works in a demonstration and having an AI service an organization can actually depend on.
