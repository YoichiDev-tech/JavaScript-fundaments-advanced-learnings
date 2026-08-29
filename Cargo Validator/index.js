// normalizeUnits MUST NOT be const
function normalizeUnits(manifest) {
  // Create a NEW object (do not mutate original)
  const copy = { ...manifest };

  // If weight is in pounds, convert to kg
  if (copy.unit === "lb") {
    copy.weight = copy.weight * 0.45; // convert
    copy.unit = "kg";                 // update unit
  }

  // If already kg, do nothing
  return copy;
}


// validateManifest MUST NOT be const
function validateManifest(manifest) {
  // Always return a NEW object
  const errors = {};

  // Check containerId
  if (!manifest.hasOwnProperty("containerId")) {
    errors.containerId = "Missing";
  } else {
    const id = manifest.containerId;
    if (
      typeof id !== "number" ||
      Number.isNaN(id) ||
      !Number.isInteger(id) ||
      id <= 0
    ) {
      errors.containerId = "Invalid";
    }
  }

  // Check destination
  if (!manifest.hasOwnProperty("destination")) {
    errors.destination = "Missing";
  } else {
    const dest = manifest.destination;
    if (typeof dest !== "string" || dest.trim() === "") {
      errors.destination = "Invalid";
    }
  }

  // Check weight
  if (!manifest.hasOwnProperty("weight")) {
    errors.weight = "Missing";
  } else {
    const w = manifest.weight;
    if (
      typeof w !== "number" ||
      Number.isNaN(w) ||
      w <= 0
    ) {
      errors.weight = "Invalid";
    }
  }

  // Check unit
  if (!manifest.hasOwnProperty("unit")) {
    errors.unit = "Missing";
  } else {
    const u = manifest.unit;
    if (u !== "kg" && u !== "lb") {
      errors.unit = "Invalid";
    }
  }

  // Check hazmat
  if (!manifest.hasOwnProperty("hazmat")) {
    errors.hazmat = "Missing";
  } else {
    const h = manifest.hazmat;
    if (typeof h !== "boolean") {
      errors.hazmat = "Invalid";
    }
  }

  // If no errors => return empty object
  return errors;
}


// processManifest MUST NOT be const
function processManifest(manifest) {
  const validation = validateManifest(manifest);

  // If valid => validation object is empty
  if (Object.keys(validation).length === 0) {
    console.log(`Validation success: ${manifest.containerId}`);

    // Normalize weight to kg
    const normalized = normalizeUnits(manifest);

    console.log(`Total weight: ${normalized.weight} kg`);
  } else {
    // Invalid manifest
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(validation);
  }
}