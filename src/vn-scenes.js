// TEST FIXTURES ONLY. Muse owns all narrative prose, dialogue and final scene copy.
// Keep IDs, objectives, branching and effect clamps stable for architectural tests.
export const VN_START_SCENE = "lh_prologue";
export const VN_SCENES = Object.freeze({
  "lh_prologue": {
    "id": "lh_prologue",
    "contentStatus": "placeholder",
    "stageId": "long_hai",
    "title": "Prologue",
    "backgroundId": "long-hai-exterior",
    "location": "Long Hải",
    "narration": [
      "[PLACEHOLDER KỸ THUẬT: Muse sẽ cung cấp đoạn dẫn chính thức cho lh_prologue.]"
    ],
    "dialogue": [],
    "choices": [
      {
        "id": "enter",
        "text": "[PLACEHOLDER lựa chọn enter]",
        "next": "lh_hall"
      },
      {
        "id": "strike",
        "text": "[PLACEHOLDER lựa chọn strike]",
        "next": "lh_dead_blade"
      }
    ]
  },
  "lh_dead_blade": {
    "id": "lh_dead_blade",
    "contentStatus": "placeholder",
    "stageId": "long_hai",
    "title": "Dead end A",
    "backgroundId": "long-hai-exterior",
    "location": "Long Hải",
    "narration": [
      "[PLACEHOLDER KỸ THUẬT: Muse sẽ cung cấp đoạn dẫn chính thức cho lh_dead_blade.]"
    ],
    "dialogue": [],
    "choices": [
      {
        "id": "retry",
        "text": "Quay lại điểm lựa chọn",
        "retry": true
      }
    ],
    "deadEnd": true
  },
  "lh_hall": {
    "id": "lh_hall",
    "contentStatus": "placeholder",
    "stageId": "long_hai",
    "title": "Long Hải 01",
    "backgroundId": "long-hai-corridor",
    "location": "Long Hải",
    "narration": [
      "[PLACEHOLDER KỸ THUẬT: Muse sẽ cung cấp đoạn dẫn chính thức cho lh_hall.]"
    ],
    "dialogue": [],
    "choices": [
      {
        "id": "observe",
        "text": "[PLACEHOLDER lựa chọn observe]",
        "next": "lh_lan_room",
        "effects": {
          "cluesHuaGiaDelta": 1
        }
      },
      {
        "id": "restrain",
        "text": "[PLACEHOLDER lựa chọn restrain]",
        "next": "lh_lan_room",
        "effects": {
          "lanTrustDelta": 1
        }
      }
    ],
    "objective": "infiltrate_villa"
  },
  "lh_lan_room": {
    "id": "lh_lan_room",
    "contentStatus": "placeholder",
    "stageId": "long_hai",
    "title": "Long Hải 02",
    "backgroundId": "tieu-lan-room",
    "location": "Long Hải",
    "narration": [
      "[PLACEHOLDER KỸ THUẬT: Muse sẽ cung cấp đoạn dẫn chính thức cho lh_lan_room.]"
    ],
    "dialogue": [],
    "choices": [
      {
        "id": "truth",
        "text": "[PLACEHOLDER lựa chọn truth]",
        "next": "lh_servants",
        "effects": {
          "lanTrustDelta": 4
        }
      },
      {
        "id": "promise",
        "text": "[PLACEHOLDER lựa chọn promise]",
        "next": "lh_servants",
        "effects": {
          "lanTrustDelta": 2
        }
      }
    ],
    "objective": "locate_tieu_lan"
  },
  "lh_servants": {
    "id": "lh_servants",
    "contentStatus": "placeholder",
    "stageId": "long_hai",
    "title": "Long Hải 03",
    "backgroundId": "long-hai-corridor",
    "location": "Long Hải",
    "narration": [
      "[PLACEHOLDER KỸ THUẬT: Muse sẽ cung cấp đoạn dẫn chính thức cho lh_servants.]"
    ],
    "dialogue": [],
    "choices": [
      {
        "id": "protect",
        "text": "[PLACEHOLDER lựa chọn protect]",
        "next": "lh_ritual",
        "effects": {
          "cluesHuaGiaDelta": 2,
          "lanTrustDelta": 2
        }
      },
      {
        "id": "separate",
        "text": "[PLACEHOLDER lựa chọn separate]",
        "next": "lh_ritual",
        "effects": {
          "cluesHuaGiaDelta": 2
        }
      }
    ],
    "objective": "classify_servants",
    "link": {
      "id": "danh",
      "phase": "identified"
    }
  },
  "lh_ritual": {
    "id": "lh_ritual",
    "contentStatus": "placeholder",
    "stageId": "long_hai",
    "title": "Long Hải 04",
    "backgroundId": "tieu-lan-room",
    "location": "Long Hải",
    "narration": [
      "[PLACEHOLDER KỸ THUẬT: Muse sẽ cung cấp đoạn dẫn chính thức cho lh_ritual.]"
    ],
    "dialogue": [],
    "choices": [
      {
        "id": "listen",
        "text": "[PLACEHOLDER lựa chọn listen]",
        "next": "lh_depart",
        "effects": {
          "lanTrustDelta": 3,
          "memoryIntegrityDelta": -3,
          "lanHealthDelta": -2
        }
      },
      {
        "id": "repeat",
        "text": "[PLACEHOLDER lựa chọn repeat]",
        "next": "lh_depart",
        "effects": {
          "lanTrustDelta": 2,
          "memoryIntegrityDelta": -3,
          "lanHealthDelta": -2
        }
      }
    ],
    "objective": "break_long_hai_ritual"
  },
  "lh_depart": {
    "id": "lh_depart",
    "contentStatus": "placeholder",
    "stageId": "long_hai",
    "title": "Long Hải 05",
    "backgroundId": "long-hai-exterior",
    "location": "Long Hải",
    "narration": [
      "[PLACEHOLDER KỸ THUẬT: Muse sẽ cung cấp đoạn dẫn chính thức cho lh_depart.]"
    ],
    "dialogue": [],
    "choices": [
      {
        "id": "ask",
        "text": "[PLACEHOLDER lựa chọn ask]",
        "next": "lh_slice_end",
        "effects": {
          "lanTrustDelta": 3
        },
        "objective": "escape_long_hai",
        "flags": {
          "lanDepartureConsent": true
        }
      },
      {
        "id": "order",
        "text": "[PLACEHOLDER lựa chọn order]",
        "next": "lh_dead_consent"
      }
    ]
  },
  "lh_dead_consent": {
    "id": "lh_dead_consent",
    "contentStatus": "placeholder",
    "stageId": "long_hai",
    "title": "Dead end B",
    "backgroundId": "long-hai-exterior",
    "location": "Long Hải",
    "narration": [
      "[PLACEHOLDER KỸ THUẬT: Muse sẽ cung cấp đoạn dẫn chính thức cho lh_dead_consent.]"
    ],
    "dialogue": [],
    "choices": [
      {
        "id": "retry",
        "text": "Quay lại điểm lựa chọn",
        "retry": true
      }
    ],
    "deadEnd": true
  },
  "lh_slice_end": {
    "id": "lh_slice_end",
    "contentStatus": "placeholder",
    "stageId": "long_hai",
    "title": "Kết thúc bản thử kiến trúc",
    "backgroundId": "long-hai-exterior",
    "location": "Long Hải",
    "narration": [
      "[PLACEHOLDER KỸ THUẬT: Muse sẽ cung cấp đoạn dẫn chính thức cho lh_slice_end.]"
    ],
    "dialogue": [],
    "choices": [],
    "sliceEnd": true
  }
});
