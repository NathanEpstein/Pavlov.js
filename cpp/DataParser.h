#ifndef DATA_PARSER
#define DATA_PARSER

#include <vector>
#include <string>
#include <sstream>
#include <stdlib.h>
#include <fstream>

#include "DataStructures.h"

class DataParser {
  public:
    DataParser(const std::string &filepath);
    void parse_observations(std::vector<observation>& obs) const;

  private:
    std::string d_filepath;
    std::vector<std::string> split(const std::string &s, char delim) const;
    observation parse_obs_line(const std::string &obs_string) const;
};

#endif
