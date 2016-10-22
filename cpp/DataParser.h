#include <iostream>
#include <vector>
#include <string>
#include <sstream>
#include <stdlib.h>
#include <fstream>

#include "DataStructures.h"

using namespace std;

class DataParser {
  public:
    DataParser(const string &filepath);
    void parse_observations(vector<observation> observations);

  private:
    string d_filepath;
    vector<string> split(const string &s, char delim);
    observation parse_obs_line(const string &obs_string);
};
