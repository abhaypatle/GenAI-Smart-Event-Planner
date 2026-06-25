class CostPredictor:
    BASE_COST = {
        "wedding": 120000,
        "birthday": 30000,
        "corporate": 80000,
        "engagement": 70000,
    }

    COST_PER_GUEST = {
        "wedding": 900,
        "birthday": 450,
        "corporate": 700,
        "engagement": 650,
    }

    @classmethod
    def predict(cls, event_type: str, guest_count: int) -> int:
        event_key = event_type.lower()
        base = cls.BASE_COST.get(event_key, 50000)
        per_guest = cls.COST_PER_GUEST.get(event_key, 500)
        return base + guest_count * per_guest