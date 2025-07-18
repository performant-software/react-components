// @flow

import React, { useState } from "react";
import SaveButton from "../../../semantic-ui/src/components/SaveButton";

export default {
  title: "Components/Semantic UI/SaveButton",
  component: SaveButton
};

export const Default = () => {
  const [msg, setMsg] = useState("");
  return (
    <div>
      <SaveButton onClick={() => setMsg("You have saved!")} />
      <p>{msg}</p>
    </div>
  );
};

export const WithDelay = () => {
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");

  const onSave = () => {
    setSaving(true);
    setTimeout(() => {
      setMsg("You have saved!");
      setSaving(false);
    }, 3000);
  };

  return (
    <div>
      <SaveButton onClick={onSave} saving={saving} />
      <p>{msg}</p>
    </div>
  );
};
