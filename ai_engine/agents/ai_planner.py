from ai_engine.ml.cost_predictor import CostPredictor


class AIPlanner:
    @staticmethod
    def generate_plan(event_type: str, city: str, guest_count: int, budget: int) -> dict:
        estimated_cost = CostPredictor.predict(event_type, guest_count)
        budget_status = "within_budget" if estimated_cost <= budget else "over_budget"

        food = int(budget * 0.40)
        decoration = int(budget * 0.20)
        photography = int(budget * 0.15)
        music = int(budget * 0.10)
        misc = budget - (food + decoration + photography + music)

        return {
            "estimated_cost": estimated_cost,
            "budget_status": budget_status,
            "budget_breakdown": {
                "food": food,
                "decoration": decoration,
                "photography": photography,
                "music": music,
                "miscellaneous": misc,
            },
            "suggested_schedule": [
                "08:00 AM - Venue setup",
                "10:00 AM - Decoration setup",
                "12:00 PM - Catering preparation",
                "04:00 PM - Guest arrival",
                "05:00 PM - Main event ceremony",
                "07:00 PM - Dinner service",
                "09:00 PM - Photography and music",
                "10:30 PM - Event closing",
            ],
            "ai_summary": (
                f"For a {event_type} event in {city} with {guest_count} guests, "
                f"estimated cost is ₹{estimated_cost}. Budget status: {budget_status}."
            ),
        }